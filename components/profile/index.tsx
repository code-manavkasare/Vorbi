import React from 'react';
import { View } from 'react-native';
import ProfileBottom from './profileBottom';
import ProfileTop from './profileTop';

export default function ({ navigation }) {
  const credibility = 500;

  return (
    <View style={{ backgroundColor: '#1F2232', flex: 1 }}>
      <ProfileTop credibility={credibility} navigation={navigation} />
      <ProfileBottom credibility={credibility} navigation={navigation} />
    </View>
  );
}
