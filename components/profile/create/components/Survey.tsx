import firebase from 'firebase';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-toast-message';
import ChoosingModal from '../../../../pages/login/ChoosingModal';
import theme from '../../../../theme';
import { UserContext } from '../../../../utils/context';
import { createSurvey } from '../../../../utils/db';
import SubmitFeedbackModal from '../../../feed/SubmitFeedbackModal';
import Category from '../../../icons/Category';
import ChevronDown from '../../../icons/ChevronDown';
import People from '../../../icons/People';
import YellowCross from '../../../icons/YellowCross';
import AvoidKeyboard from './AvoidKeyboard';

const verified = true;

const categories = [
  'Health',
  'Infrastructure',
  'Social',
  'Technology',
  'Environment',
];

const types = ['Everyone', 'Custom'];

export default function Survey({ navigation }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [activeOptionText, setActiveOptionText] = useState('');
  const [activeOptionIndex, setActiveOptionIndex] = useState(null);
  const [category, setCategory] = useState(null);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [type, setType] = useState('Everyone');
  const [modalType, setModalType] = useState(null);

  const handleAddOption = () => {
    setOptions((prev) => prev.concat({ text: '' }));
  };

  const handleOnFocus = (e: any) => setActiveOptionIndex(e);

  const handleOnBlur = (e: string | number) => {
    const clone = [...options];
    clone[e].text = activeOptionText;
    setOptions(options);
    setActiveOptionIndex(null);
    setActiveOptionText('');
  };

  const handleRemoveOption = (e: number) => {
    const filtered = options.filter((item, index) => index !== e);
    setOptions(filtered);
  };

  const handleCreateSurvey = async () => {
    if (!question.length) return;
    else if (!category)
      return Toast.show({
        text1: 'Error',
        text2: 'Please choose a category',
        type: 'error',
      });
    setLoading(true);
    try {
      const payload = {
        data: question,
        userId: user.uid,
        options,
        topic: category.toLowerCase(),
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      await createSurvey(payload);
      Toast.show({
        type: 'success',
        text1: 'Created post successfully!',
      });
      setLoading(false);
      setQuestion('');
      setOptions([]);
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
    if (modalType === 'category') setCategory(item);
    else setType(item);
  };

  const handleTypePress = () => {
    if (user.verified || user.credibility > 999) {
      setModalType('type');
      setShowCategoryModal(true);
    } else return;
  };

  const handleCategoryPress = () => {
    setModalType('category');
    setShowCategoryModal(true);
  };

  const getSelected = () => {
    if (modalType === 'category') return category;
    else return type;
  };

  const getData = () => {
    if (modalType === 'category') return categories;
    else return types;
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.optionTile}>
      <TouchableOpacity onPress={() => handleRemoveOption(index)}>
        <YellowCross />
      </TouchableOpacity>
      <TextInput
        value={activeOptionIndex === index ? activeOptionText : item.text}
        onChangeText={
          activeOptionIndex !== null ? (e) => setActiveOptionText(e) : () => {}
        }
        onFocus={() => handleOnFocus(index)}
        onBlur={() => handleOnBlur(index)}
        style={styles.optionInput}
        placeholder="Add Option"
        placeholderTextColor="#B3B7CD"
      />
    </View>
  );

  return (
    <AvoidKeyboard>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <ChoosingModal
            selected={getSelected()}
            data={getData()}
            visible={showCategoryModal}
            onSelect={handleOnSelect}
            setVisible={setShowCategoryModal}
          />
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={(e) => setQuestion(e)}
            multiline
            placeholder="Type Question..."
            placeholderTextColor="#B3B7CD"
            textAlignVertical="top"
          />

          <TouchableOpacity
            onPress={handleAddOption}
            style={styles.addButtonContainer}
          >
            <Text style={[styles.label, styles.addButton]}>Add</Text>
          </TouchableOpacity>

          {options.length ? (
            <FlatList
              data={options}
              style={styles.list}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <></>
          )}

          <View style={styles.bottomContainer}>
            <Text style={styles.label}>Settings</Text>
            <View style={styles.row}>
              <TouchableWithoutFeedback onPress={handleTypePress}>
                <View style={[styles.row, styles.tile]}>
                  <People />
                  <Text style={styles.label}>
                    {user.verified || user.credibility > 999
                      ? type
                      : 'Everyone'}
                  </Text>
                  <ChevronDown color={undefined} />
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={handleCategoryPress}>
                <View style={[styles.row, styles.tile]}>
                  <Category />
                  <Text style={styles.label}>
                    {category ? category : 'Category'}
                  </Text>
                  <ChevronDown color={undefined} />
                </View>
              </TouchableWithoutFeedback>
            </View>

            {type === 'Custom' && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CustomSettings', { type: 'Survey' })
                }
                style={{ marginTop: 30 }}
              >
                <Text style={[styles.label, styles.changeCustom]}>
                  Change Custom Settings
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={handleCreateSurvey}
              style={styles.bottomButton}
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
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: '#B3B7CD',
  },
  addButtonContainer: {
    marginTop: 30,
    alignSelf: 'flex-start',
    marginLeft: theme.width * 0.05,
  },
  addButton: {
    textDecorationLine: 'underline',
    textAlign: 'left',
  },
  list: {
    marginTop: 20,
    maxHeight: theme.height * 0.25,
  },
  optionTile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: theme.width * 0.8,
    marginLeft: theme.width * 0.05,
    marginVertical: 5,
  },
  optionInput: {
    width: theme.width * 0.7,
    height: 60,
    color: '#B3B7CD',
    backgroundColor: '#2A2E42',
    borderRadius: 10,
    paddingLeft: 10,
  },
  bottomContainer: {
    marginTop: theme.height * 0.05,
    width: theme.width * 0.9,
    alignSelf: 'center',
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
