import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Exclamation from '../../components/icons/Exclamation';
import TickCircle from '../../components/icons/TickCircle';
import { colorpicker } from '../../utilities';
import { getMainFeedSurvey } from '../../utils/db';

const Surveypageitem = ({
  // completedBy,
  // type,
  // title,
  // progression,
  id,
  navigation,
}) => {
  const [survey, setSurvey] = useState({
    status: '',
    question: '',
    category: '',
  });
  const [done, setDone] = useState(true);
  var progression = 5;
  var progress = parseFloat(progression * 10),
    circumference = 170;

  const x = ((100 - progress) / 100) * circumference;

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    const data = await getMainFeedSurvey(id);
    console.log('data', data);
    if (data.status === 'done') setDone(true);
    setSurvey(data);
  };

  const handleSetDone = (e) => setDone(e);

  return (
    <TouchableOpacity
      style={styles.itemouter}
      disabled={done}
      onPress={() =>
        navigation.navigate('SurveyPage', {
          title: survey.category,
          surveyId: id,
          handleSetDone,
        })
      }
    >
      <View
        style={{
          transform: [{ rotateY: '180deg' }, { rotateZ: '-90deg' }],
        }}
      >
        <Svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          style={styles.progress}
        >
          <Circle
            stroke={colorpicker(survey.category)}
            strokeLinecap="round"
            cx="30"
            cy="30"
            r="27"
            strokeWidth="5"
            strokeDasharray="170"
            strokeDashoffset={x}
          ></Circle>
        </Svg>
      </View>
      <View style={styles.progresstext}>
        <Text
          style={[
            styles.progresstextinner,
            { transform: [{ translateX: -40 }] },
          ]}
        >
          {progression.toFixed(1)}
        </Text>
        <Text
          style={[styles.progresstitle, { transform: [{ translateX: -10 }] }]}
        >
          {survey.category.length &&
            survey.category[0].toUpperCase() + survey.category.slice(1)}
        </Text>
      </View>
      <View style={styles.progressicon}>
        {done && <TickCircle />}
        {!done && <Exclamation />}
      </View>
    </TouchableOpacity>
  );
};

export default Surveypageitem;

const styles = StyleSheet.create({
  itemouter: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  progress: {},
  progresstext: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 4,
    fontFamily: 'Poppins-Regular',
  },
  progresstextinner: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  progresstitle: {
    color: '#6D7187',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  progressicon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
