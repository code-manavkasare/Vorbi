import { StackScreenProps } from '@react-navigation/stack';
import * as GoogleSignIn from 'expo-google-sign-in';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { StackParamList } from '../../App';
import LoadingModal from '../../components/LoadingModal';
import firebase, { auth } from '../../firebase';
import GoogleSignInContainer from './GoogleSignInContainer';
import styles from './styles';

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePhone = (phone) => {
  const re = /^\+?\d[\d -]{8,12}\d$/;
  return re.test(phone);
};

const Login: React.FunctionComponent<
  StackScreenProps<StackParamList, 'Login'>
> = ({ navigation }) => {
  const [disabled, setdisabled] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const {} = useAuthState(auth);
  const inputElementRef = useRef(null);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState({ visible: false, text: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: 'Poppins-Regular' },
    });
    initAsync();
  }, []);

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId:
        '500571869292-3tlo6fvmqcooblpj6s38f1oco4f0si43.apps.googleusercontent.com',
    });
    _syncUserWithStateAsync();
  };

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    const googleCredential = firebase.auth.GoogleAuthProvider.credential(
      user.auth.idToken
    );
    await auth.signInWithCredential(googleCredential);
    return;
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {}
  };

  const handleLogin = () => {
    if (!isEmail && !isPhone) return setError('Invalid Input');
    if (isEmail) handleEmail();
    else if (isPhone) handlePhone();
  };

  const handleEmail = async () => {
    try {
      setLoading({ visible: true, text: 'Signing in...' });
      await auth.signInWithEmailAndPassword(phoneOrEmail, password);
      setLoading({ visible: false, text: null });
      navigation.navigate('Main');
    } catch (err) {
      setLoading({ visible: false, text: null });
      setError(err.message);
    }
  };

  const handlePhone = async () => {
    navigation.navigate('OtpVerification', {
      phone: phoneOrEmail,
      type: 'login',
    });
  };

  const onChangeText = (text) => {
    setPhoneOrEmail(text);
    if (validateEmail(text)) setIsEmail(true);
    else if (validatePhone(text)) setIsPhone(true);
    else {
      isEmail && setIsEmail(false);
      isPhone && setIsPhone(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <LoadingModal visible={loading.visible} text={loading.text} />
        <View style={styles.topContainer}>
          <Text style={styles.headingText1}>Welcome Back!</Text>
        </View>

        <View style={styles.middleContainer}>
          <View>
            {error && <Text style={styles.error}>{error}</Text>}
            <TextInput
              ref={inputElementRef}
              style={styles.phoneInput}
              placeholder={'Phone or email'}
              placeholderTextColor="#6D7187"
              onChangeText={onChangeText}
              value={phoneOrEmail}
            />
            {isEmail && (
              <>
                <TextInput
                  ref={inputElementRef}
                  style={styles.phoneInput}
                  placeholder={'Password'}
                  placeholderTextColor="#6D7187"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
                <View style={styles.forgotPasswordButton}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <Text style={styles.forgotPasswordButtonLabel}>
                      Forgot Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={disabled}
            >
              <Text style={styles.buttonLabel}>Login</Text>
            </TouchableOpacity>
          </View>

          <GoogleSignInContainer onPress={signInAsync} />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomHeading}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={styles.bottomButton}
          >
            <Text style={styles.buttonLabel}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
