import React from 'react';
import { View } from 'react-native';
import ProfileBottom from './profileBottom';
import ProfileTop from './profileTop';

export default function () {
  return (
    <View style={{ backgroundColor: '#1F2232', flex: 1 }}>
      <ProfileTop />
      <ProfileBottom />
    </View>
  );
}
