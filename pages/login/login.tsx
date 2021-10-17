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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    await auth.signInWithEmailAndPassword(phoneOrEmail, password);
    setLoading(false);
    navigation.navigate('Main');
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
    // <ScrollView
    //   style={{ flex: 1, backgroundColor: '#1F2232', paddingVertical: 30 }}
    // >
    //   <View style={styles.container}>
    //     <View style={{ alignItems: 'flex-start', marginBottom: 30 }}>
    //       <Text
    //         style={{
    //           fontSize: 30,
    //           fontFamily: 'Poppins-Regular',
    //           color: 'white',
    //         }}
    //       >
    //         Sign Up
    //       </Text>
    //     </View>
    //     <View
    //       style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
    //     >
    //       <View
    //         style={{
    //           paddingLeft: 10,
    //           height: 60,
    //           borderWidth: 1,
    //           width: SCREEN_WIDTH * 0.8,
    //           borderRadius: 10,
    //           borderColor: '#363C5A',
    //         }}
    //       >
    //         <TextInput
    //           style={styles.TextInput}
    //           placeholder={'Email'}
    //           placeholderTextColor="#6D7187"
    //           onChangeText={setusernameValue}
    //           value={usernameValue}
    //         />
    //       </View>
    //     </View>
    //     <View
    //       style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
    //     >
    //       <View
    //         style={{
    //           paddingLeft: 10,
    //           height: 60,
    //           borderWidth: 1,
    //           width: SCREEN_WIDTH * 0.8,
    //           borderRadius: 10,
    //           borderColor: '#363C5A',
    //         }}
    //       >
    //         <TextInput
    //           style={styles.TextInput}
    //           placeholder={'Pincode'}
    //           placeholderTextColor="#6D7187"
    //           onChangeText={setusernameValue}
    //           value={usernameValue}
    //         />
    //       </View>
    //     </View>
    //     <View
    //       style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
    //     >
    //       <View
    //         style={{
    //           paddingLeft: 10,
    //           height: 60,
    //           borderWidth: 1,
    //           width: SCREEN_WIDTH * 0.8,
    //           borderRadius: 10,
    //           borderColor: '#363C5A',
    //         }}
    //       >
    //         <TextInput
    //           ref={inputElementRef}
    //           style={styles.TextInput}
    //           placeholder={'Your Password'}
    //           secureTextEntry
    //           placeholderTextColor="#6D7187"
    //           onChangeText={setpasswordValue}
    //           value={passwordValue}
    //         />
    //       </View>
    //     </View>
    //     <View
    //       style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
    //     >
    //       <View
    //         style={{
    //           paddingLeft: 10,
    //           height: 60,
    //           borderWidth: 1,
    //           width: SCREEN_WIDTH * 0.8,
    //           borderRadius: 10,
    //           borderColor: '#363C5A',
    //         }}
    //       >
    //         <TextInput
    //           ref={inputElementRef}
    //           style={styles.TextInput}
    //           placeholder={'Confirm Password '}
    //           secureTextEntry
    //           placeholderTextColor="#6D7187"
    //           onChangeText={setpasswordAgainValue}
    //           value={passwordAgainValue}
    //         />
    //       </View>
    //     </View>
    //     <TouchableOpacity
    //       style={{
    //         margin: 10,
    //         backgroundColor: '#FFB30F',
    //         width: SCREEN_WIDTH * 0.8,
    //         height: 60,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         borderRadius: 10,
    //       }}
    //       onPress={async () => {
    //         setdisabled(true);

    //         auth
    //           .createUserWithEmailAndPassword(usernameValue, passwordValue)
    //           .then(() => {
    //             navigation.navigate('Main');
    //           });
    //       }}
    //       disabled={disabled}
    //     >
    //       <Text
    //         style={{
    //           fontSize: 20,
    //           fontFamily: 'Poppins-Regular',
    //           color: 'white',
    //         }}
    //       >
    //         Create Account
    //       </Text>
    //     </TouchableOpacity>
    //     <Text
    //       style={{
    //         fontSize: 20,
    //         fontFamily: 'Poppins-Regular',
    //         color: 'white',
    //       }}
    //     >
    //       or
    //     </Text>
    //     <TouchableOpacity
    //       style={{
    //         margin: 10,
    //         backgroundColor: '#363C5A',
    //         width: SCREEN_WIDTH * 0.8,
    //         height: 60,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         borderRadius: 10,
    //       }}
    //       onPress={() => {
    //         signInAsync();
    //       }}
    //     >
    //       <View
    //         style={{
    //           flex: 1,
    //           flexDirection: 'row',
    //           justifyContent: 'space-around',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <View style={{ margin: 5 }}>
    //           <GoogleIcon />
    //         </View>
    //         <View style={{ margin: 5 }}>
    //           <Text
    //             style={{
    //               fontSize: 20,
    //               fontFamily: 'Poppins-Regular',
    //               color: 'white',
    //             }}
    //           >
    //             Continue with Google
    //           </Text>
    //         </View>
    //       </View>
    //     </TouchableOpacity>
    //     <View style={{ display: 'flex', flexDirection: 'row' }}>
    //       <Text style={{ color: '#6D7187' }}>Already have an account? </Text>
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation.navigate('Login');
    //         }}
    //         style={{
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           display: 'flex',
    //         }}
    //       >
    //         <Text style={{ color: '#6D71A7' }}>Login</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </ScrollView>
  );
};

export default Login;

// async function onGoogleButtonPress() {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }
