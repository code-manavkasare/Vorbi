import firebase from 'firebase';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { firestore } from '../../../../firebase';
import ChoosingModal from '../../../../pages/login/ChoosingModal';

import theme from '../../../../theme';
import { UserContext } from '../../../../utils/context';
import { createPost } from '../../../../utils/db';
import Category from '../../../icons/Category';
import ChevronDown from '../../../icons/ChevronDown';
import People from '../../../icons/People';
import LoadingModal from '../../../LoadingModal';
import AvoidKeyboard from './AvoidKeyboard';

const verified = true;

const categories = [
  'Health',
  'Infrastructure',
  'Social',
  'Technology',
  'Environment',
];

export default function Post({ navigation }) {
  const [voice, setVoice] = useState('');
  const [category, setCategory] = useState(null);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleCreatePost = async () => {
    if (!voice.length) return;
    else if (!category)
      return Toast.show({
        text1: 'Error',
        text2: 'Please choose a category',
        type: 'error',
      });
    setLoading(true);
    try {
      const payload = {
        name: user.name,
        userId: user.uid,
        designation: user.designation,
        data: voice,
        type: category.toLowerCase(),
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likedBy: [],
      };
      await createPost(payload);
      Toast.show({
        type: 'success',
        text1: 'Created post successfully!',
      });
      setLoading(false);
      setVoice('');
      setCategory(null);
    } catch (err) {
      setLoading(false);
      Toast.show({
        text1: 'Could not crete post',
        type: 'error',
        text2: err.message,
      });
    }
  };

  const handleOnSelect = (item: any) => {
    setCategory(item);
  };

  return (
    <AvoidKeyboard>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <LoadingModal visible={loading} text="Creating post..." />
          <ChoosingModal
            selected={category}
            data={categories}
            visible={showCategoryModal}
            onSelect={handleOnSelect}
            setVisible={setShowCategoryModal}
          />
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
                <ChevronDown color={undefined} />
              </View>
              <TouchableWithoutFeedback
                onPress={() => setShowCategoryModal(true)}
              >
                <View style={[styles.row, styles.tile]}>
                  <Category />
                  <Text style={styles.label}>
                    {category ? category : 'Category'}
                  </Text>
                  <ChevronDown color={undefined} />
                </View>
              </TouchableWithoutFeedback>
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

          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={handleCreatePost}
              style={styles.bottomButton}
              disabled={loading}
            >
              <Text style={styles.buttonLabel}>Submit</Text>
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
  bottom: {
    height: theme.height * 0.05,
    width: theme.width * 0.9,
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
