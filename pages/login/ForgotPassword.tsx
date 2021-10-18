import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoadingModal from '../../components/LoadingModal';
import { auth } from '../../firebase';
import theme from '../../theme';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState({ visible: false, text: null });
  const [error, setError] = useState(null);

  const handleSend = async () => {
    try {
      setLoading({ visible: true, text: 'Sending email...' });
      await auth.sendPasswordResetEmail(email);
      setLoading({ visible: true, text: 'Email sent!' });
      setTimeout(() => {
        setLoading({ visible: false, text: null });
      }, 500);
    } catch (err) {
      setLoading({ visible: true, text: 'Could not send email!' });
      setTimeout(() => {
        setLoading({ visible: false, text: null });
      }, 500);
      setError(err.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <LoadingModal visible={loading.visible} text={loading.text} />
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.description}>
          Enter the email associated to your account.
        </Text>
        {error && (
          <Text style={styles.error}>
            Please make sure that the email is valid and the user exists.
          </Text>
        )}
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder="Email"
          placeholderTextColor="#B3B7CD"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonLabel}>Send</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
  },
  heading: {
    marginLeft: theme.width * 0.1,
    fontSize: 30,
    color: '#fff',
    marginVertical: 25,
    marginTop: theme.height * 0.05,
  },
  description: {
    marginLeft: theme.width * 0.1,
    fontSize: 20,
    color: '#B3B7CD',
  },
  input: {
    paddingVertical: 15,
    color: '#B3B7CD',
    alignSelf: 'center',
    width: theme.width * 0.8,
    paddingHorizontal: 20,

    marginVertical: 15,
    borderWidth: 2,
    borderColor: '#363C5A',
    borderRadius: 10,
    fontSize: 18,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#FFB30F',
    width: theme.width * 0.8,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonLabel: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#ffff',
  },
  error: {
    color: 'crimson',
    marginTop: 50,
    marginHorizontal: theme.width * 0.1,
  },
});
