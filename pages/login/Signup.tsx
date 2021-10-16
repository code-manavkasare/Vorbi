import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import firebase, { firestore, auth, googleAuthProvider } from '../../firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../../App';
import { GoogleIcon } from '../../components/svgs';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './styles';

const Signup: React.FunctionComponent<
  StackScreenProps<StackParamList, 'Signup'>
> = ({ navigation }) => {
  const [usernameValue, setusernameValue] = useState('');
  const [passwordValue, setpasswordValue] = useState('');
  const [disabled, setdisabled] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const {} = useAuthState(auth);
  const inputElementRef = useRef(null);

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

        <View style={styles.middleContainer}>
          <View>
            <TextInput
              ref={inputElementRef}
              style={styles.phoneInput}
              placeholder={'Phone or email'}
              placeholderTextColor="#6D7187"
              onChangeText={(text) => setPhoneOrEmail(text)}
              value={phoneOrEmail}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                setdisabled(true);
                auth
                  .signInWithEmailAndPassword(usernameValue, passwordValue)
                  .then(() => {
                    navigation.navigate('Main');
                  });
              }}
              disabled={disabled}
            >
              <Text style={styles.buttonLabel}>Create Account</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.googleContainer}
            onPress={signInAsync}
          >
            <View style={styles.googleSubContainer}>
              <View style={{ margin: 5 }}>
                <GoogleIcon />
              </View>
              <View style={{ margin: 5 }}>
                <Text style={styles.googleLabel}>Sign in with Google</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomHeading}>Already have an account?</Text>
          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.buttonLabel}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>

    // <View style={styles.container}>

    //   <View
    //     style={{ alignItems: 'flex-start', marginBottom: 30, marginEnd: 70 }}
    //   >
    // <Text
    //   style={{
    //     fontSize: 30,
    //     fontFamily: 'Poppins-Regular',
    //     color: 'white',
    //   }}
    // >
    //   Welcome To
    // </Text>
    // <Text
    //   style={{
    //     fontSize: 30,
    //     fontFamily: 'Poppins-Regular',
    //     color: '#FFB30F',
    //   }}
    // >
    //   Vorbi
    // </Text>
    //   </View>

    //   <View
    //     style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
    //   >
    //     <View
    //       style={{
    //         paddingLeft: 10,
    //         height: 60,
    //         borderWidth: 1,
    //         width: SCREEN_WIDTH * 0.8,
    //         borderRadius: 10,
    //         borderColor: '#363C5A',
    //       }}
    //     >
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholder={' username '}
    //         placeholderTextColor="#6D7187"
    //         onChangeText={(text) => setusernameValue(text)}
    //         value={usernameValue}
    //       />
    //     </View>
    //   </View>
    //   <View
    //     style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
    //   >
    //     <View
    //       style={{
    //         paddingLeft: 10,
    //         height: 60,
    //         borderWidth: 1,
    //         width: SCREEN_WIDTH * 0.8,
    //         borderRadius: 10,
    //         borderColor: '#363C5A',
    //       }}
    //     >
    // <TextInput
    //   ref={inputElementRef}
    //   style={styles.TextInput}
    //   placeholder={' password '}
    //   secureTextEntry
    //   placeholderTextColor="#6D7187"
    //   onChangeText={(text) => setpasswordValue(text)}
    //   value={passwordValue}
    // />
    //     </View>
    //   </View>

    // <TouchableOpacity
    //   style={{
    //     margin: 10,
    //     backgroundColor: '#FFB30F',
    //     width: SCREEN_WIDTH * 0.8,
    //     height: 60,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 10,
    //   }}
    //   onPress={async () => {
    //     setdisabled(true);
    //     auth
    //       .signInWithEmailAndPassword(usernameValue, passwordValue)
    //       .then(() => {
    //         navigation.navigate('Main');
    //       });
    //   }}
    //   disabled={disabled}
    // >
    //   <Text
    //     style={{
    //       fontSize: 20,
    //       fontFamily: 'Poppins-Regular',
    //       color: 'white',
    //     }}
    //   >
    //     Signup
    //   </Text>
    // </TouchableOpacity>
    //   <Text
    //     style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: 'white' }}
    //   >
    //     or
    //   </Text>
    // <TouchableOpacity
    //   style={{
    //     margin: 10,
    //     backgroundColor: '#363C5A',
    //     width: SCREEN_WIDTH * 0.8,
    //     height: 60,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 10,
    //   }}
    //   onPress={() => {
    //     signInAsync();
    //   }}
    // >
    //   <View
    //     style={{
    //       flex: 1,
    //       flexDirection: 'row',
    //       justifyContent: 'space-around',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <View style={{ margin: 5 }}>
    //       <GoogleIcon />
    //     </View>
    //     <View style={{ margin: 5 }}>
    //       <Text
    //         style={{
    //           fontSize: 20,
    //           fontFamily: 'Poppins-Regular',
    //           color: 'white',
    //         }}
    //       >
    //         Continue with Google
    //       </Text>
    //     </View>
    //   </View>
    // </TouchableOpacity>
    //   <View style={{ display: 'flex', flexDirection: 'row' }}>
    //     <Text style={{ color: '#6D7187' }}>Don't have an account? </Text>
    //     <TouchableOpacity
    //       onPress={() => {
    //         navigation.navigate('Signup');
    //       }}
    //       style={{
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         display: 'flex',
    //       }}
    //     >
    //       <Text style={{ color: '#6D71A7' }}>Signup</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

export default Signup;

// async function onGoogleButtonPress() {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }
