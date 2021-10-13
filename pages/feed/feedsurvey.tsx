import React from 'react';
import { View } from 'react-native';
import Survey from '../../components/feed/survey';
const FeedSurvey = ({ category }) => {
  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
      <Survey category={category} />
    </View>
  );
};
export default FeedSurvey;
