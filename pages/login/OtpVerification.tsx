import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import OtpInput from 'react-native-otp-textinput';
import theme from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GoogleSignInContainer from './GoogleSignInContainer';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import firebase from 'firebase';
import { firebaseConfig } from '../../firebase';

export default function OtpVerification({ route, navigation }) {
  const { phone, type } = route.params;

  const recaptchaVerifier = React.useRef(null);
  const attemptInvisibleVerification = true;

  let otpInput = useRef(null);
  const [code, setCode] = useState('');
  const [time, setTime] = useState(45);
  const [firstRender, setFirstRender] = useState(true);
  const [verificationId, setVerificationId] = useState(null);
  const interval = useRef(null);

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
    console.log('sending otp', phone);
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const _phone = phone[0] !== '+' ? '+91' + phone : phone;
    const _verificationId = await phoneProvider.verifyPhoneNumber(
      _phone,
      recaptchaVerifier.current
    );
    setVerificationId(_verificationId);
    setFirstRender(false);
    time !== 45 && setTime(45);
    handleStartTimer();
  };

  const handleVerify = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      const response = await firebase.auth().signInWithCredential(credential);
      console.log('verify response', response);
    } catch (err) {
      console.log('error occured while verifying otp', err);
    }
  };

  const handleGoogleSignIn = () => {};

  const handleNavigate = () => {
    navigation.navigate(type === 'login' ? 'Signup' : 'Login');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />
        <View style={styles.topContainer}>
          <Text style={styles.otpScreenHeading}>Login via OTP</Text>
          <Text style={styles.otpScreenDescirption}>
            Your OTP is valid for 5 minutes
          </Text>
        </View>

        <View style={styles.middleContainer}>
          <View>
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
                00.{time.toString()}
              </Text>
              <TouchableOpacity
                disabled={!firstRender && time !== 0}
                onPress={handleSendOtp}
              >
                <Text
                  style={[
                    styles.otpScreenDescirption,
                    { textDecorationLine: 'underline' },
                  ]}
                >
                  Send OTP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <GoogleSignInContainer onPress={handleGoogleSignIn} />
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
              {type === 'login' ? 'Log in' : 'Sign up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
