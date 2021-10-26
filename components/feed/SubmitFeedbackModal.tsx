import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import theme from '../../theme';
import { UserContext } from '../../utils/context';
import { createFeedback, getUser, storeUser, updateUser } from '../../utils/db';
import LoadingModal from '../LoadingModal';
import AvoidKeyboard from '../profile/create/components/AvoidKeyboard';

export default function SubmitFeedbackModal({
  visible,
  setVisible,
  data,
  postId,
  username,
  designation,
}) {
  const [feedback, setFeedback] = useState('');
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const paylod = {
        userId: user.uid,
        postId,
        feedback,
      };
      await createFeedback(paylod);
      const response = await updateUser(
        {
          credibility: user.credibility + 5,
          credsFromFeed: user.credsFromFeed + 5,
        },
        user.uid
      );
      if (response && !response.noCredits) {
        const _user = await getUser(user.uid);
        setUser(_user);
      }
      setVisible(false);
      Toast.show({
        type: 'success',
        text1: 'Thank you for your feedback!',
        text2:
          response && response.noCredits
            ? response.noCredits
            : 'You have received 5 credits',
      });
    } catch (err) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err && err.message ? err.message : 'Something went wrong!',
      });
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <AvoidKeyboard>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <LoadingModal visible={loading} text="Posting the feedback..." />
            <Text style={styles.heading}>Feedback to</Text>
            <Text style={styles.heading}>
              {username} | {designation}
            </Text>
            <View style={styles.desciptionContainer}>
              <Text style={styles.desciption}>{data}</Text>
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

            <TouchableOpacity
              disabled={loading}
              onPress={handleSubmit}
              style={styles.button}
            >
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
