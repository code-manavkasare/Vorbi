import React, { useContext, useState } from 'react';
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
import Toast from 'react-native-toast-message';
import theme from '../../theme';
import { UserContext } from '../../utils/context';
import { getUser, updateUser } from '../../utils/db';
import LoadingModal from '../LoadingModal';
import AvoidKeyboard from './create/components/AvoidKeyboard';

export default function EditProfile() {
  const { user, setUser } = useContext(UserContext);
  const [designation, setDesignation] = useState(user.designation);
  const [loading, setLoading] = useState(false);

  const handleRequestChanges = async () => {
    await Linking.openURL('mailto:info@teamlookout.in');
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await updateUser({ designation }, user.uid);
      const _user = await getUser(user.uid);
      setUser(_user);
      setLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Udpated profile successfully!',
      });
    } catch (err) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'error',
        text2: err.message ? err.message : 'Someting went wrong!',
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <LoadingModal visible={loading} text="Updaing profile..." />
        <View style={styles.list}>
          <AvoidKeyboard>
            <TextInput
              editable={false}
              style={styles.input}
              value={user.name}
              placeholder="Name"
              placeholderTextColor="#B3B7CD"
            />
            <TextInput
              editable={false}
              style={styles.input}
              value={user.email}
              placeholder="Email"
              placeholderTextColor="#B3B7CD"
            />
            <TextInput
              style={[styles.input, { color: '#B3B7CD' }]}
              value={designation}
              placeholder="Designation"
              placeholderTextColor="#B3B7CD"
              onChangeText={(e) => setDesignation(e)}
            />
            <TextInput
              editable={false}
              style={styles.input}
              value={user.state}
              placeholder="State"
              placeholderTextColor="#B3B7CD"
            />
            <TextInput
              editable={false}
              style={styles.input}
              value={user.country}
              placeholder="Country"
              placeholderTextColor="#B3B7CD"
            />
            {user.category && (
              <TextInput
                editable={false}
                style={styles.input}
                value={user.category}
                placeholder="Category"
                placeholderTextColor="#B3B7CD"
              />
            )}
            {user.gender && (
              <TextInput
                editable={false}
                style={styles.input}
                value={user.gender}
                placeholder="Pincode"
                placeholderTextColor="#B3B7CD"
              />
            )}
            {user.age && (
              <TextInput
                editable={false}
                style={styles.input}
                value={user.age}
                placeholder="Age"
                placeholderTextColor="#B3B7CD"
              />
            )}
          </AvoidKeyboard>
        </View>
        <TouchableWithoutFeedback onPress={handleRequestChanges}>
          <View style={styles.requestChangesContainer}>
            <Text style={styles.requestChangesText}>Request changes</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          disabled={user.designation === designation || !designation.length}
          style={styles.button}
          onPress={handleUpdate}
        >
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
    color: '#363C5A',
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
