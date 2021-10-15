import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default function Survey() {
  return (
    <View style={styles.screen}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
  },
});
