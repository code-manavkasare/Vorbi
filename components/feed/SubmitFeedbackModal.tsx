import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import theme from '../../theme';
import AvoidKeyboard from '../profile/create/components/AvoidKeyboard';

export default function SubmitFeedbackModal({ visible, setVisible }) {
  const [feedback, setFeedback] = useState('');

  return (
    <Modal visible={visible} animationType="slide">
      <AvoidKeyboard>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <Text style={styles.heading}>Feedback to</Text>
            <Text style={styles.heading}>Rajiinder Kumar | SHO</Text>
            <View style={styles.desciptionContainer}>
              <Text style={styles.desciption}>
                Recent clashes between the protesters and the police are
                saddening, designated areas should be specified by the
                government for peaceful protests to avoid the same.
              </Text>
            </View>

            <TextInput
              style={styles.input}
              value={feedback}
              onChangeText={(e) => setFeedback(e)}
              placeholder="Type your feedback here..."
              placeholderTextColor="#B3B7CD"
              textAlignVertical="top"
              multiline
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonLabel}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.cancelButton}
            >
              <Text style={styles.desciption}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </AvoidKeyboard>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: theme.background.primary100,
    paddingHorizontal: theme.width * 0.1,
    paddingVertical: theme.height * 0.1,
  },
  heading: {
    fontSize: 30,
    color: theme.text.primary100,
    textAlign: 'left',
  },
  desciption: {
    fontSize: 20,
    color: '#B3B7CD',
  },
  desciptionContainer: {
    marginTop: 25,
    marginHorizontal: theme.width * 0.025,
  },
  caption: {
    fontSize: 16,
    color: '#fff',
  },
  input: {
    borderRadius: 20,
    marginVertical: theme.height * 0.05,
    backgroundColor: '#2A2E42',
    color: '#fff',
    minHeight: theme.height * 0.2,
    maxHeight: theme.height * 0.5,
    padding: 25,
  },
  button: {
    width: theme.width * 0.4,
    paddingVertical: 10,
    backgroundColor: theme.text.Yellow,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonLabel: {
    color: theme.background.primary100,
    fontSize: 16,
  },
  cancelButton: { alignSelf: 'center', marginTop: 40 },
});
