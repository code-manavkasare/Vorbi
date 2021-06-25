import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  Keyboard,
} from 'react-native';
import { firestore } from '../../firebase';
const screenWidth = Dimensions.get('screen').width;

const NewPost = ({ navigation }) => {
  const [value, setvalue] = useState('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ backgroundColor: '#1F2232', flex: 1, display: 'flex' }}>
        <View
          style={{
            display: 'flex',
            marginTop: 70,
            flex: 1,
          }}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextInput
              style={{
                backgroundColor: '#2A2E42',
                minHeight: 130,
                width: screenWidth - 70,
                color: '#B3B7CD',
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                textAlignVertical: 'top',
                padding: 10,
                borderRadius: 20,
              }}
              multiline="true"
              placeholder={' Create Post ...'}
              placeholderTextColor="#B3B7CD"
              onChangeText={(text) => setvalue(text)}
              value={value}
              textAlignVertical="top"
            />
          </View>
          <TouchableOpacity style={{ paddingLeft: 45, marginTop: 70 }}>
            <Text style={{ color: '#B3B7CD' }}>Feedback Setting</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.1,
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#FFB30F',
              width: 100,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginRight: 10,
            }}
            onPress={() => {
              var d = new Date();

              firestore.collection('posts').add({
                data: value,
                name: 'Username',
                type: 'social',
                timestamp: d,
              });
              setvalue('');
              navigation.navigate('Home');
            }}
          >
            <Text
              style={{
                alignText: 'center',
                color: 'black',
                fontFamily: 'Poppins-Regular',
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1 }}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default NewPost;
