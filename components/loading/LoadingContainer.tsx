import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '../../theme';

export default function LoadingContainer() {
  return (
    <View style={style.container}>
      <ActivityIndicator color={theme.text.primary100} size="small" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
