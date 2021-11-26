import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';
import { getMainFeedSurveyPoll } from '../../utils/db';

const PollPageItem = ({ navigation, route }) => {
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of Stars
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  const [poll, setPoll] = useState({ question: '' });
  const { handleSetDone, surveyId, optionChosen } = route.params;

  useEffect(() => {
    handleGetQuestions();
  }, []);

  const handleGetQuestions = async () => {
    const data = await getMainFeedSurveyPoll(surveyId);
    setPoll(data[0]);
  };

  const handleOption = (index) => {
    //frontend
    setTimeout(function () {
      navigation.navigate('FinalPage', {
        surveyId,
        handleSetDone,
        rating: index + 1,
        optionChosen,
      });
    }, 2000);
    //backend
  };

  const Filled = () => {
    return (
      <Svg width="28" height="28" viewBox="0 0 62 62" fill="none">
        <Circle
          cx="31"
          cy="31"
          r="27"
          fill="#FFB30F"
          stroke="#FFB30F"
          strokeWidth="8"
        />
        <Circle
          cx="31"
          cy="31"
          r="27"
          fill="#FFB30F"
          stroke="#FFB30F"
          strokeWidth="8"
        />
      </Svg>
    );
  };
  const Unfilled = () => {
    return (
      <Svg width="28" height="28" viewBox="0 0 62 62" fill="none">
        <Circle cx="31" cy="31" r="27" stroke="#6D7187" stroke-width="8" />
      </Svg>
    );
  };
  const Question = () => {
    return (
      <View style={[styles.questionbox]}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Regular',
            fontSize: 20,
          }}
        >
          {poll.question}
        </Text>
      </View>
    );
  };
  const Options = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              style={styles.TouchableOpacity}
              activeOpacity={0.7}
              key={key}
              onPress={() => {
                setDefaultRating(item);
                handleOption(key);
              }}
            >
              {item <= defaultRating ? <Filled /> : <Unfilled />}
            </TouchableOpacity>
          );
        })}
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
            x2={0.6 * screen}
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
          <Options />
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
            onPress={() => navigation.navigate('SurveyPage')}
          >
            <Text style={{ color: '#6D7187', fontFamily: 'Poppins-Regular' }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('FinalPage')}
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

export default PollPageItem;

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#1f2232',
    flex: 1,
  },
  customRatingBarStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  questionbox: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});
