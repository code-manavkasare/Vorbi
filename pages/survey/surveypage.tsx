import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { getMainFeedSurveyQuestions } from '../../utils/db';

const ques =
  'Have you ever heard of instances which made you feel insecure in your society?';
const optionlist = [
  { id: 0, option: 'Never' },
  { id: 1, option: 'Rarely' },
  { id: 2, option: 'Sometimes' },
  { id: 3, option: 'Regularly' },
];

const SurveyPageItem = ({ navigation, route }) => {
  const myRefs = useRef([]);
  const { handleSetDone, surveyId } = route.params;
  const [question, setQuestion] = useState({ question: '', choices: [] });

  useEffect(() => {
    handleGetQuestions();
  }, []);

  const handleGetQuestions = async () => {
    const data = await getMainFeedSurveyQuestions(surveyId);
    setQuestion(data[0]);
  };

  const handleOption = (id) => {
    //frontend

    for (let i = 0; i < myRefs.current.length; i++) {
      if (i == id) {
        myRefs.current[id].setNativeProps({
          style: { backgroundColor: '#09BC8A' },
        });
      } else {
        myRefs.current[i].setNativeProps({
          style: { backgroundColor: '#2A2E42' },
        });
      }
    }

    //shift
    setTimeout(function () {
      navigation.navigate('PollPage', { surveyId, handleSetDone });
    }, 1000);
    //backend
  };

  const Question = () => {
    return (
      <View style={[styles.questionbox]}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Poppins-Regular',
          }}
        >
          {question.question}
        </Text>
      </View>
    );
  };
  const Options = ({ option, id }) => {
    return (
      <View style={{ margin: 10 }}>
        <TouchableOpacity
          style={[styles.optionstyle]}
          ref={(el) => (myRefs.current[id] = el)}
          onPress={() => {
            handleOption(id);
          }}
        >
          <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular' }}>
            {option}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ProgressBar = () => {
    const window = Dimensions.get('window').width;
    const screen = Dimensions.get('screen').width;
    return (
      <View>
        <Svg width={screen} height="70" viewBox={`0 0 ${screen} 70`}>
          <Line
            x1="0"
            y1="12.5"
            x2={screen}
            y2="12.5"
            stroke="#2A2E42"
            strokeWidth="25"
            strokeLinecap="round"
          />
          <Line
            x1="0"
            y1="12.5"
            x2={0.3 * screen}
            y2="12.5"
            stroke="#414765"
            strokeWidth="25"
            strokeLinecap="round"
          />
        </Svg>
      </View>
    );
  };

  return (
    <View style={[styles.outer]}>
      <ProgressBar />
      <View style={{ flex: 1 }}>
        <Question />
        <View style={{ padding: 20, flex: 2 }}>
          <FlatList
            data={question.choices}
            renderItem={({ item, index }) => {
              return <Options option={item.text} id={index} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 40,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: '#6D7187', fontFamily: 'Poppins-Regular' }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('PollPage')}
          >
            <Text style={{ color: '#6D7187', fontFamily: 'Poppins-Regular' }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SurveyPageItem;

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#1f2232',
    flex: 1,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  questionbox: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
  },
  optionstyle: {
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2A2E42',
  },
});
