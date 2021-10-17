import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GoogleIcon } from '../../components/svgs';
import styles from './styles';

export default function GoogleSignInContainer({ onPress }) {
  return (
    <TouchableOpacity style={styles.googleContainer} onPress={onPress}>
      <View style={styles.googleSubContainer}>
        <View style={{ margin: 5 }}>
          <GoogleIcon />
        </View>
        <View style={{ margin: 5 }}>
          <Text style={styles.googleLabel}>Sign in with Google</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
