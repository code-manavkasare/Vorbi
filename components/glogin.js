import React, { useState, useEffect, useRef } from 'react';

import { Button } from 'react-native';
import { auth } from '../firebase';
import * as GoogleSignIn from 'expo-google-sign-in';

const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}

export const GoogleSignInMine = () => {

    useEffect(() => {
    }, [])
    return (
        <Button
            title="Google Sign-In"
            onPress={() => onGoogleButtonPress()}
        />
    );
}

const obj = {
    webClientId: '500571869292-3tlo6fvmqcooblpj6s38f1oco4f0si43.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: 'https://lookout-b4bd7.firebaseio.com', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '500571869292-3tlo6fvmqcooblpj6s38f1oco4f0si43.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
}
// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '500571869292-3tlo6fvmqcooblpj6s38f1oco4f0si43.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   // accountName: '', // [Android] specifies an account name on the device that should be used
// });    
// const signIn = async (setloggedIn) => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const { accessToken, idToken } = await GoogleSignin.signIn();
//     setloggedIn(true);
//   } catch (error) {
//     console.warn(error)
//   }
// };
// const signOut = async () => {
//   try {
//     await GoogleSignin.revokeAccess();
//     await GoogleSignin.signOut();
//     setloggedIn(false);
//     setuserInfo([]);
//   } catch (error) {
//     console.error(error);
//   }
// };
