import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import { firestore, auth, googleAuthProvider, } from '../../firebase';
import * as GoogleSignIn from 'expo-google-sign-in';

import { GoogleIcon } from '../../components/svgs';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const Login = () => {
  const [usernameValue, setusernameValue] = useState('');
  const [passwordValue, setpasswordValue] = useState('');
  const [disabled, setdisabled] = useState(false);
  const [ouruser, setuser] = useState()
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: 'Poppins-Regular' },
    });
    initAsync();
  }, []);

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId: '500571869292-89jbo4i0ef22o94sk7i52v1n6ookms1f.apps.googleusercontent.com',
    });
    _syncUserWithStateAsync();
  };

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setuser(user);
  };

  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setuser(null);
    auth.signOut()
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user, idtoken } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        _syncUserWithStateAsync();
        const googleCredential = auth.GoogleAuthProvider.credential(idtoken);
        return auth().signInWithCredential(googleCredential);
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: 'flex-start', marginBottom: 30, marginEnd: 70 }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Poppins-Regular',
            color: 'white',
          }}
        >
          Log in or Sign Up
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Poppins-Regular',
            color: '#FFB30F',
          }}
        >
          for FREE
        </Text>
      </View>

      <View
        style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{
            paddingLeft: 10,
            height: 60,
            borderWidth: 1,
            width: SCREEN_WIDTH * 0.8,
            borderRadius: 10,
            borderColor: '#363C5A',
          }}
        >
          <TextInput
            style={styles.TextInput}
            placeholder={' username '}
            placeholderTextColor="#6D7187"
            onChangeText={(text) => setusernameValue(text)}
            value={usernameValue}
          />
        </View>
      </View>
      <View
        style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{
            paddingLeft: 10,
            height: 60,
            borderWidth: 1,
            width: SCREEN_WIDTH * 0.8,
            borderRadius: 10,
            borderColor: '#363C5A',
          }}
        >
          <TextInput
            ref={inputElementRef}
            style={styles.TextInput}
            placeholder={' password '}
            secureTextEntry

            placeholderTextColor="#6D7187"
            onChangeText={(text) => setpasswordValue(text)}
            value={passwordValue}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: '#FFB30F',
          width: SCREEN_WIDTH * 0.8,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={async () => {
          setdisabled(true);
          auth.signInWithEmailAndPassword(usernameValue, passwordValue);
        }}
        disabled={disabled}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Regular',
            color: 'white',
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: 'white' }}
      >
        or
      </Text>
      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: '#363C5A',
          width: SCREEN_WIDTH * 0.8,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          if (ouruser) {
            signOutAsync();
          } else {
            signInAsync();
          }
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ margin: 5 }}>
            <GoogleIcon />
          </View>
          <View style={{ margin: 5 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Regular',
                color: 'white',
              }}
            >
              Continue with Google
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{ color: '#6D7187' }}>Already have an account?</Text>
      </View>
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2232',
  },
  TextInput: {
    height: 60,
    // color: '#363C5A',
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  }
});

export default Login;

// async function onGoogleButtonPress() {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }