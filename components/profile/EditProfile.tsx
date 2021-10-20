import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Linking,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../theme';
import AvoidKeyboard from './create/components/AvoidKeyboard';

export default function EditProfile() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('India');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');

  const handleRequestChanges = async () => {
    await Linking.openURL('mailto:info@teamlookout.in');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View style={styles.list}>
          <AvoidKeyboard>
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Name"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setName(e)}
            />
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setEmail(e)}
            />
            <TextInput
              style={styles.input}
              value={designation}
              placeholder="Designation"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setDesignation(e)}
            />
            <TextInput
              style={styles.input}
              value={pinCode}
              placeholder="Pincode"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setPinCode(e)}
            />
          </AvoidKeyboard>
        </View>
        <TouchableWithoutFeedback onPress={handleRequestChanges}>
          <View style={styles.requestChangesContainer}>
            <Text style={styles.requestChangesText}>Request changes</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>Proceed</Text>
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
  input: {
    paddingVertical: 15,
    color: '#B3B7CD',
    paddingHorizontal: 20,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: '#363C5A',
    borderRadius: 10,
    fontSize: 18,
  },
  list: {
    width: theme.width * 0.8,
    height: theme.height * 0.6,
    marginTop: theme.height * 0.1,
    alignSelf: 'center',
  },
  requestChangesContainer: {
    marginLeft: theme.width * 0.1,
  },
  requestChangesText: {
    fontSize: 14,
    color: '#B3B7CD',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#FFB30F',
    width: theme.width * 0.8,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: theme.background.primary100,
  },
});
