import React from 'react';
import { View } from 'react-native';
import ProfileBottom from './profileBottom';
import ProfileTop from './profileTop';
import { auth } from './../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function () {
  const [user] = useAuthState(auth);
  console.log('user', user);

  return (
    <View style={{ backgroundColor: '#1F2232', flex: 1 }}>
      <ProfileTop />
      <ProfileBottom />
    </View>
  );
}
