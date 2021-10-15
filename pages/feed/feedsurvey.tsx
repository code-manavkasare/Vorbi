import React, { useState } from 'react';
import { View } from 'react-native';
import Survey from '../../components/feed/survey';
import Sort from './Sort';

const FeedSurvey = () => {
  const [category, setCategory] = useState(null);

  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
      <Sort category={category} setCategory={setCategory} />
      <Survey category={category} />
    </View>
  );
};
export default FeedSurvey;
