import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../../../../theme';
import ChevronDown from '../../../icons/ChevronDown';
import Info from '../../../icons/Info';
import Plus from '../../../icons/Plus';
import countries from '../../../../assets/countries.json';
import states from '../../../../assets/states.json';
import ChoosingModal from '../../../../pages/login/ChoosingModal';

const genders = ['Male', 'Female', 'Other'];

export default function CustomSettings({ navigation, route: { params } }) {
  const { type } = params;

  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleCountryModal = () => {
    setModalType('country');
    setShowModal(true);
  };

  const handleStateModal = () => {
    if (country.length === 0) return;
    setModalType('state');
    setShowModal(true);
  };

  const handleGenderModal = () => {
    if (country.length === 0 || state.length === 0) return;
    setModalType('gender');
    setShowModal(true);
  };

  const getSelected = () => {
    if (modalType === 'state') return state;
    else if (modalType === 'country') return country;
    else if (modalType === 'gender') return gender;
  };

  const getData = () => {
    if (modalType === 'state') return states;
    else if (modalType === 'country') return countries;
    else if (modalType === 'gender') return genders;
  };

  const handleOnSelect = (item: React.SetStateAction<string>) => {
    if (modalType === 'state') return setState(item);
    else if (modalType === 'country') return setCountry(item);
    else if (modalType === 'gender') return setGender(item);
  };

  return (
    <View style={styles.screen}>
      <ChoosingModal
        onSelect={handleOnSelect}
        visible={showModal}
        setVisible={setShowModal}
        selected={getSelected()}
        data={getData()}
      />
      <Text style={styles.desription}>
        Our users will see your{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {type === 'Post' ? 'post' : 'survey'}
        </Text>{' '}
        based on these settings, you can use these to target a better audience.
        {'   '}
        <Text onPress={() => navigation.navigate('Info')}>
          <Info />
        </Text>
      </Text>

      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleCountryModal}>
          <View style={styles.tile}>
            <Text style={[styles.label, styles.active]}>
              Country{' '}
              {country.length > 0 && (
                <Text style={[styles.label, styles.inactive]}>
                  {'  ' + country}
                </Text>
              )}
            </Text>
            <ChevronDown color="#fff" />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleStateModal}>
          <View style={styles.tile}>
            <Text
              style={
                country.length > 0
                  ? [styles.label, styles.active]
                  : [styles.label, styles.inactive]
              }
            >
              State
              {country.length > 0 && (
                <Text style={[styles.label, styles.inactive]}>
                  {'  ' + state}
                </Text>
              )}
            </Text>
            <ChevronDown color={country.length > 0 ? '#fff' : '#363C5A'} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={styles.tile}>
            <Text
              style={
                country.length > 0 && state.length > 0
                  ? [styles.label, styles.active]
                  : [styles.label, styles.inactive]
              }
            >
              Pincode(s)
            </Text>
            <Plus
              color={
                country.length > 0 && state.length > 0 ? '#fff' : '#363C5A'
              }
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.tile}>
          <Text style={[styles.label, styles.inactive]}>Age</Text>
          <ChevronDown color="#363C5A" />
        </View>
        <TouchableWithoutFeedback onPress={handleGenderModal}>
          <View style={styles.tile}>
            <Text style={[styles.label, styles.inactive]}>Gender</Text>
            <ChevronDown color="#363C5A" />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
    paddingVertical: theme.height * 0.1,
    paddingHorizontal: theme.width * 0.1,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  desription: {
    color: '#B3B7CD',
    fontSize: 16,
  },
  container: {
    marginTop: theme.height * 0.1,
    flex: 1,
    alignItems: 'center',
  },
  tile: {
    width: theme.width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
  },
  active: {
    color: '#fff',
  },
  inactive: {
    color: '#363C5A',
  },
  bottom: {
    height: theme.height * 0.05,
    alignItems: 'flex-end',
  },
  bottomButton: {
    backgroundColor: '#FFB30F',
    width: theme.width * 0.3,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: theme.background.primary100,
  },
});
