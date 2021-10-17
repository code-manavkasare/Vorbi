import { StackScreenProps } from '@react-navigation/stack';
import * as GoogleSignIn from 'expo-google-sign-in';
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { StackParamList } from '../../App';
import firebase, { auth } from '../../firebase';
import styles from './styles';

const Login: React.FunctionComponent<
  StackScreenProps<StackParamList, 'Login'>
> = ({ navigation }) => {
  const [usernameValue, setusernameValue] = useState<string>('');
  const [passwordValue, setpasswordValue] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [passwordAgainValue, setpasswordAgainValue] = useState<string>('');
  const [disabled, setdisabled] = useState<boolean>(false);
  const {} = useAuthState(auth);
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: 'Poppins-Regular' },
    });
    // initAsync();
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
    // auth.GoogleAuthProvider.credential(
    //   user.auth.idToken
    // );
    await auth.signInWithCredential(googleCredential);
    return;
  };

  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    auth.signOut();
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View style={styles.topContainer}>
          <Text style={styles.headingText1}>Welcome To</Text>
          <Text style={styles.headingText2}>Vorbi</Text>
        </View>

        <View style={styles.middleContainer}></View>
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
