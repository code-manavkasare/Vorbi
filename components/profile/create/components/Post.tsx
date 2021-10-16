import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import theme from '../../../../theme';
import Category from '../../../icons/Category';
import ChevronDown from '../../../icons/ChevronDown';
import People from '../../../icons/People';
import AvoidKeyboard from './AvoidKeyboard';

const verified = true;

export default function Post({ navigation }) {
  const [voice, setVoice] = useState('');

  return (
    <AvoidKeyboard>
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
            <View style={styles.row}>
              <View style={[styles.row, styles.tile]}>
                <People />
                <Text style={styles.label}>
                  {verified ? 'Custom' : 'Everyone'}
                </Text>
                <ChevronDown />
              </View>
              <View style={[styles.row, styles.tile]}>
                <Category />
                <Text style={styles.label}>Category</Text>
                <ChevronDown />
              </View>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CustomSettings', { type: 'Post' })
              }
              style={{ marginTop: 30 }}
            >
              <Text style={[styles.label, styles.changeCustom]}>
                Change Custom Settings
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </AvoidKeyboard>
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
  tile: {
    marginTop: 25,
    width: theme.width * 0.3,
    justifyContent: 'space-around',
  },
  changeCustom: {
    textDecorationLine: 'underline',
  },
});
