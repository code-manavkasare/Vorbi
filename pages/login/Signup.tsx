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

const Signup: React.FunctionComponent<
  StackScreenProps<StackParamList, 'Signup'>
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
        const user = await GoogleSignIn.signInSilentlyAsync();
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(
          user.auth.idToken
        );

        navigation.navigate('UserInfo', {
          type: 'gogle',
          credentialParam: googleCredential,
          emailParam: user.email,
        });
      }
    } catch ({ message }) {}
  };

  const handleCreateAccount = async () => {
    if (isEmail) handleEmail();
    else if (isPhone) handlePhone();
  };

  const handleEmail = async () => {
    try {
      // await auth.createUserWithEmailAndPassword(phoneOrEmail, password);
      navigation.navigate('UserInfo', {
        type: 'email',
        emailParam: phoneOrEmail,
        passwordParam: password,
      });
    } catch (err) {
      setLoading({ visible: false, text: null });
      setError(err.message);
    }
  };

  const handlePhone = async () => {
    navigation.navigate('OtpVerification', {
      phone: phoneOrEmail,
      type: 'signup',
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
          <Text style={styles.headingText1}>Welcome To</Text>
          <Text style={styles.headingText2}>Vorbi</Text>
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
              <TextInput
                ref={inputElementRef}
                style={styles.phoneInput}
                placeholder={'Password'}
                placeholderTextColor="#6D7187"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={handleCreateAccount}
              disabled={(!isEmail && !isPhone) || disabled}
            >
              <Text style={styles.buttonLabel}>Create Account</Text>
            </TouchableOpacity>
          </View>

          <GoogleSignInContainer onPress={signInAsync} />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomHeading}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.bottomButton}
          >
            <Text style={styles.buttonLabel}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
