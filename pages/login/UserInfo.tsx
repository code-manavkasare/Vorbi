import React, { useState } from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Checkmark from '../../components/icons/Checkmark';
import AvoidKeyboard from '../../components/profile/create/components/AvoidKeyboard';
import theme from '../../theme';

const mandatory = ['name', 'designation', 'pincode', 'state', 'country'];

export default function UserInfo({ route }) {
  const { type } = route.params;
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
  const [checked, setChecked] = useState(false);

  const [errors, setErrors] = useState([]);

  const handleErrors = () => {
    let _errors = [];
    if (!name) _errors.push('name');
    if (!designation) _errors.push('designation');
    if (type === 'email' && !phone) _errors.push('phone');
    if (type === 'phone' && !email) _errors.push('email');
    if (!pinCode) _errors.push('pincode');
    if (!state) _errors.push('state');
    return _errors;
  };

  const handleProceed = () => {
    const response = handleErrors();
    if (response.length) return setErrors(response);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.heading}>Just a</Text>
        <Text style={styles.heading}>few seconds...</Text>
        <View style={styles.middleContainer}>
          <AvoidKeyboard>
            <TextInput
              style={styles.input(errors.includes('name'))}
              value={name}
              placeholder="Name"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setName(e)}
            />
            {errors.includes('name') && (
              <Text style={styles.helperText}>This field is mandatory</Text>
            )}
            {type === 'phone' ? (
              <>
                <TextInput
                  style={styles.input(errors.includes('email'))}
                  value={email}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  placeholder="Email"
                  placeholderTextColor="#B3B7CD"
                  onChangeText={(e) => setEmail(e)}
                />
                {errors.includes('email') && (
                  <Text style={styles.helperText}>This field is mandatory</Text>
                )}
              </>
            ) : (
              <>
                <TextInput
                  style={styles.input(errors.includes('phone'))}
                  value={phone}
                  placeholder="Phone"
                  placeholderTextColor="#B3B7CD"
                  onChangeText={(e) => setPhone(e)}
                />
                {errors.includes('phone') && (
                  <Text style={styles.helperText}>This field is mandatory</Text>
                )}
              </>
            )}
            <TextInput
              style={styles.input(errors.includes('designation'))}
              value={designation}
              placeholder="Designation"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setDesignation(e)}
            />
            {errors.includes('designation') && (
              <Text style={styles.helperText}>This field is mandatory</Text>
            )}
            <TextInput
              style={styles.input(errors.includes('pincode'))}
              value={pinCode}
              placeholder="Pincode"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setPinCode(e)}
            />
            {errors.includes('pincode') && (
              <Text style={styles.helperText}>This field is mandatory</Text>
            )}
            <TextInput
              style={styles.input(errors.includes('state'))}
              value={state}
              placeholder="State"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setState(e)}
            />
            {errors.includes('state') && (
              <Text style={styles.helperText}>This field is mandatory</Text>
            )}
            <TextInput
              style={[styles.input(false), { color: '#363C5A' }]}
              value={country}
              editable={false}
              placeholder="Country"
              placeholderTextColor="#363C5A"
              onChangeText={(e) => setCountry(e)}
            />
            <Text style={styles.helperText}>We currently serve here</Text>
            <TextInput
              style={styles.input(false)}
              value={age}
              editable={false}
              placeholder="Age"
              placeholderTextColor="#363C5A"
              onChangeText={(e) => setAge(e)}
            />
          </AvoidKeyboard>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.row}>
            <TouchableWithoutFeedback
              onPress={() => setChecked((prev) => !prev)}
            >
              <View style={styles.checkbox}>{checked && <Checkmark />}</View>
            </TouchableWithoutFeedback>
            <View style={{ marginLeft: 20 }}>
              <Text style={[styles.helperText, { fontSize: 18 }]}>
                I agree the above information
              </Text>
              <Text style={[styles.helperText, { fontSize: 18 }]}>
                provided by me is true.
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleProceed}>
            <Text style={styles.buttonLabel}>Procced</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
    paddingVertical: theme.height * 0.1,
  },
  heading: {
    fontSize: 30,
    color: '#fff',
    marginLeft: theme.width * 0.1,
  },
  middleContainer: {
    height: theme.height * 0.5,
    width: theme.width * 0.8,
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: (isError: any) => ({
    paddingVertical: 15,
    color: '#B3B7CD',
    paddingHorizontal: 20,
    marginVertical: 15,
    borderWidth: isError ? 0.5 : 2,
    borderColor: isError ? 'crimson' : '#363C5A',
    borderRadius: 10,
    fontSize: 18,
  }),
  helperText: {
    color: '#B3B7CD',
    fontSize: 14,
    marginLeft: 10,
  },
  bottomContainer: {
    marginTop: 25,
    width: theme.width * 0.8,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: '#363C5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
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
});
