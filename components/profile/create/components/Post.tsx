import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import theme from '../../../../theme';

export default function Post() {
  const [voice, setVoice] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <TextInput
          style={styles.input}
          value={voice}
          onChangeText={(e) => setVoice(e)}
          multiline
          placeholder="Share your voice..."
          placeholderTextColor="#B3B7CD"
          textAlignVertical="top"
        />

        <View style={styles.bottomContainer}>
          <Text style={styles.label}>Settings</Text>
          <View style={styles.row}></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
    alignItems: 'center',
    paddingVertical: 40,
  },
  input: {
    backgroundColor: theme.background.primary200,
    width: theme.width * 0.9,
    minHeight: theme.height * 0.2,
    padding: 25,
    borderRadius: 15,
    fontSize: 16,
    color: '#B3B7CD',
  },
  bottomContainer: {
    marginTop: theme.height * 0.1,
    width: theme.width * 0.9,
  },
  label: {
    fontSize: 16,
    color: '#B3B7CD',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
