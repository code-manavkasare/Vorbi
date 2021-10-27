import firebase from 'firebase';
import React, { useContext, useRef, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Checkmark from '../../components/icons/Checkmark';
import ChevronDown from '../../components/icons/ChevronDown';
import LoadingModal from '../../components/LoadingModal';
import AvoidKeyboard from '../../components/profile/create/components/AvoidKeyboard';
import { auth } from '../../firebase';
import theme from '../../theme';
import { UserContext } from '../../utils/context';
import { storeUser } from '../../utils/db';
import ChoosingModal from './ChoosingModal';
import states from '../../assets/states.json';

const genders = ['Male', 'Female', 'Other'];

const categories = ['General', 'SC', 'ST', 'OBC'];

export default function UserInfo({ route, navigation }) {
  const {
    type,
    emailParam,
    passwordParam,
    credentailParam,
    phoneParam,
    verificationId,
    code,
  } = route.params;
  const [name, setName] = useState('');
  const { setUser } = useContext(UserContext);
  const [designation, setDesignation] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('India');
  const [phone, setPhone] = useState(type === 'phone' ? phoneParam : '');
  const [email, setEmail] = useState(
    type === 'email' || type === 'google' ? emailParam : ''
  );
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [checked, setChecked] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [errors, setErrors] = useState([]);

  const [loading, setLoading] = useState({ visible: false, text: null });

  const handleErrors = () => {
    let _errors = [];
    if (!name) _errors.push('name');
    if (!designation) _errors.push('designation');
    if (type === 'email' && !phone) _errors.push('phone');
    if (type === 'google' && !phone) _errors.push('phone');
    if (type === 'phone' && !email) _errors.push('email');
    if (!pinCode) _errors.push('pincode');
    if (!state) _errors.push('state');
    return _errors;
  };

  const handleProceed = () => {
    const response = handleErrors();
    if (response.length) return setErrors(response);
    if (!checked) return;
    if (type === 'email') return handleEmail();
    else if (type === 'phone') return handlePhone();
    else if (type === 'google') return handleGoogle();
  };

  const handleGoogle = async () => {
    try {
      setLoading({ visible: true, text: 'Signing up...' });

      await auth.signInWithCredential(credentailParam);
      await handleStoreUser();
      setLoading({ visible: false, text: null });
    } catch (err) {
      console.log('handleEmail', err);
      setLoading({ visible: false, text: null });
    }
  };

  const handleEmail = async () => {
    try {
      setLoading({ visible: true, text: 'Signing up...' });
      await auth.createUserWithEmailAndPassword(emailParam, passwordParam);
      await handleStoreUser();
      setLoading({ visible: false, text: null });
    } catch (err) {
      console.log('handleEmail', err);
      setLoading({ visible: false, text: null });
    }
  };

  const handlePhone = async () => {
    try {
      console.log('handlePhone');
      setLoading({ visible: true, text: 'Signing up...' });
      console.log('signed in');
      await handleStoreUser();
      setLoading({ visible: false, text: null });
    } catch (err) {
      console.log('error singing up', err);
      setLoading({ visible: false, text: null });
    }
  };

  const handleStoreUser = async () => {
    const user = auth.currentUser;
    const payload = {
      uid: user.uid,
      name,
      email,
      phone,
      designation,
      pinCode,
      state,
      country,
      age,
      gender,
      category,
      credibility: 10,
      type: 1,
      savedPosts: [],
      filled: 0,
      feedbacks: 0,
      posts: 0,
      surveys: 0,
      likes: 0,
      credsFromFeed: 0,
      weeklyCreds: 0,
    };
    try {
      console.log('storing user', user);
      setUser(payload);
      await storeUser(payload);
      navigation.navigate('Main');
    } catch (err) {
      console.log('error storing user', err);
    }
  };

  const handleStateModal = () => {
    setModalType('state');
    setShowModal(true);
  };

  const handleGenderModal = () => {
    setModalType('gender');
    setShowModal(true);
  };

  const handleCategoryModal = () => {
    setModalType('category');
    setShowModal(true);
  };

  const getSelected = () => {
    if (modalType === 'state') return state;
    else if (modalType === 'gender') return gender;
    else if (modalType === 'category') return category;
  };

  const getData = () => {
    if (modalType === 'state') return states;
    else if (modalType === 'gender') return genders;
    else if (modalType === 'category') return categories;
  };

  const handleOnSelect = (item: React.SetStateAction<string>) => {
    if (modalType === 'state') return setState(item);
    else if (modalType === 'gender') return setGender(item);
    else if (modalType === 'category') return setCategory(item);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <LoadingModal visible={loading.visible} text={loading.text} />
        <ChoosingModal
          onSelect={handleOnSelect}
          visible={showModal}
          setVisible={setShowModal}
          selected={getSelected()}
          data={getData()}
        />
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
                  keyboardType="email-address"
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
                  keyboardType="phone-pad"
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
              style={styles.input(errors.includes('age'))}
              value={age}
              keyboardType="number-pad"
              placeholder="Age"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setAge(e)}
            />
            {errors.includes('pincode') && (
              <Text style={styles.helperText}>This field is mandatory</Text>
            )}
            <TextInput
              style={styles.input(errors.includes('pincode'))}
              value={pinCode}
              keyboardType="number-pad"
              placeholder="Pincode"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setPinCode(e)}
            />
            <TouchableWithoutFeedback onPress={handleStateModal}>
              <View
                style={[
                  styles.input(errors.includes('state')),
                  styles.dropdownContainer,
                ]}
              >
                <Text style={styles.dropdownText}>
                  {state.length ? state : 'State'}
                </Text>
                <ChevronDown color={null} />
              </View>
            </TouchableWithoutFeedback>
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

            <TouchableWithoutFeedback onPress={handleGenderModal}>
              <View
                style={[
                  styles.input(errors.includes('gender')),
                  styles.dropdownContainer,
                ]}
              >
                <Text style={styles.dropdownText}>
                  {gender.length ? gender : 'Gender'}
                </Text>
                <ChevronDown color={null} />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handleCategoryModal}>
              <View
                style={[
                  styles.input(errors.includes('category')),
                  styles.dropdownContainer,
                ]}
              >
                <Text style={styles.dropdownText}>
                  {category.length ? category : 'Category'}
                </Text>
                <ChevronDown color={null} />
              </View>
            </TouchableWithoutFeedback>
          </AvoidKeyboard>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.row}>
            <TouchableWithoutFeedback
              onPress={() => setChecked((prev) => !prev)}
            >
              <View style={styles.checkbox}>
                {checked && <Checkmark color={null} />}
              </View>
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

          <TouchableOpacity
            disabled={!checked}
            style={styles.button}
            onPress={handleProceed}
          >
            <Text style={styles.buttonLabel}>Proceed</Text>
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
    width: theme.width,
    marginVertical: 20,
    alignItems: 'center',
  },
  input: (isError: any) => ({
    width: theme.width * 0.8,
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
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 18,
    color: '#B3B7CD',
  },
});
