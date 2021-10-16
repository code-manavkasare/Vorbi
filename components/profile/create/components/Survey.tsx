import React, { useState } from 'react';
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
import theme from '../../../../theme';
import Category from '../../../icons/Category';
import ChevronDown from '../../../icons/ChevronDown';
import People from '../../../icons/People';
import YellowCross from '../../../icons/YellowCross';
import AvoidKeyboard from './AvoidKeyboard';

const verified = true;

export default function Survey() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [activeOptionText, setActiveOptionText] = useState('');
  const [activeOptionIndex, setActiveOptionIndex] = useState(null);

  const handleAddOption = () => {
    setOptions((prev) => prev.concat({ text: '' }));
  };

  const handleOnFocus = (e) => setActiveOptionIndex(e);

  const handleOnBlur = (e) => {
    const clone = [...options];
    clone[e].text = activeOptionText;
    setOptions(options);
    setActiveOptionIndex(null);
    setActiveOptionText('');
  };

  const handleRemoveOption = (e) => {
    // const clone = [...options];
    // const spliced = clone.splice(e, 1);
    // setOptions(spliced);
    const filtered = options.filter((item, index) => index !== e);
    setOptions(filtered);
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
              <View style={[styles.row, styles.tile]}>
                <People />
                <Text style={styles.label}>
                  {verified ? 'Custom' : 'Everyone'}
                </Text>
                <ChevronDown />
              </View>
              <View style={[styles.row, styles.tile]}>
                <Category />
                <Text style={styles.label}>Category</Text>
                <ChevronDown />
              </View>
            </View>

            <TouchableOpacity style={{ marginTop: 30 }}>
              <Text style={[styles.label, styles.changeCustom]}>
                Change Custom Settings
              </Text>
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
});
