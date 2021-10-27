import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import OtpInput from 'react-native-otp-textinput';
import theme from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GoogleSignInContainer from './GoogleSignInContainer';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import firebase from 'firebase';
import { auth, firebaseConfig } from '../../firebase';
import LoadingModal from '../../components/LoadingModal';
import { getUser } from '../../utils/db';
import { UserContext } from '../../utils/context';

export default function OtpVerification({ route, navigation }) {
  const { phone, type } = route.params;

  const recaptchaVerifier = React.useRef(null);
  const attemptInvisibleVerification = false;

  let otpInput = useRef(null);
  const [code, setCode] = useState('');
  const [time, setTime] = useState(45);
  const [firstRender, setFirstRender] = useState(true);
  const [verificationId, setVerificationId] = useState(null);
  const interval = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({ visible: false, text: null });

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (time === 0) {
      clearInterval(interval.current);
    }
  }, [time]);

  const handleStartTimer = () => {
    interval.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const handleSendOtp = async () => {
    try {
      setLoading({ visible: true, text: 'Sending Otp...' });
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const _phone = phone[0] !== '+' ? '+91' + phone : phone;
      const _verificationId = await phoneProvider.verifyPhoneNumber(
        _phone,
        recaptchaVerifier.current
      );
      setLoading({ visible: true, text: 'Otp Sent!' });
      setTimeout(() => {
        setLoading({ visible: false, text: null });
      }, 500);
      setVerificationId(_verificationId);
      setFirstRender(false);
      time !== 45 && setTime(45);
      handleStartTimer();
    } catch (err) {
      setLoading({ visible: false, text: null });
      setError(err.message);
    }
  };

  const handleVerify = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      if (type === 'login') {
        handleLogin(credential);
      } else {
        handleSignup(credential);
      }
    } catch (err) {
      console.log('handleVerify error', err.message);
      setError(err.message);
    }
  };

  const handleLogin = async (credential) => {
    try {
      await firebase.auth().signInWithCredential(credential);
      const _user = await getUser(auth.currentUser.uid);
      setUser(_user);
      navigation.navigate('Main');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async (credential) => {
    try {
      await auth.signInWithCredential(credential);
      navigation.navigate('UserInfo', {
        type: 'phone',
        credentialParam: credential,
        verificationId,
        code,
        phoneParam: phone,
      });
      // await auth.signOut();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNavigate = () => {
    type === 'login' ? navigation.push('Signup') : navigation.push('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <LoadingModal visible={loading.visible} text={loading.text} />
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />
        <View style={styles.topContainer}>
          <Text style={styles.otpScreenHeading}>
            {type === 'login' ? 'Login' : 'Signup'} via OTP
          </Text>
          <Text style={styles.otpScreenDescirption}>
            Your OTP is valid for 5 minutes
          </Text>
        </View>

        <View style={styles.middleContainer}>
          <View>
            {error && <Text style={styles.error}>{error}</Text>}
            <OtpInput
              ref={(e) => (otpInput = e)}
              inputCount={6}
              handleTextChange={(e) => setCode(e)}
              tintColor={theme.text.Yellow}
              textInputStyle={styles.otpInputCell}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerify}>
              <Text style={styles.buttonLabel}>
                {type === 'login' ? 'Login' : 'Create Account'}
              </Text>
            </TouchableOpacity>

            <View style={styles.otpScreenMidBottom}>
              <Text style={styles.otpScreenDescirption}>
                00.
                {time.toString().length === 1
                  ? '0' + time.toString()
                  : time.toString()}
              </Text>
              <TouchableOpacity
                disabled={!firstRender && time !== 0}
                onPress={handleSendOtp}
              >
                <Text
                  style={[
                    styles.otpScreenDescirption,
                    {
                      textDecorationLine: 'underline',
                      color: !firstRender && time !== 0 ? '#363C5A' : '#fff',
                    },
                  ]}
                >
                  Send OTP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomHeading}>
            {type === 'login'
              ? 'Don’t have an account?'
              : 'Already have an account?'}
          </Text>
          <TouchableOpacity
            onPress={handleNavigate}
            style={styles.bottomButton}
          >
            <Text style={styles.buttonLabel}>
              {type === 'login' ? 'Sign up' : 'Log in'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
