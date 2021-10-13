import React, { useState } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeedSurvey from '../../pages/feed/feedsurvey';
import FeedPost from '../../pages/feed/feedpost';
import MyTabBar from '../tabbars/feedtabbar';
import Sort from '../Sort';

const Tab = createMaterialTopTabNavigator();

const categories = [
  'None',
  'Health',
  'Infrastructure',
  'Social',
  'Technology',
  'Environment',
];

const FeedTop = () => {
  const [category, setCategory] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <Sort
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <Tab.Navigator
        tabBar={(props) => (
          <MyTabBar sceneContainerStyle={undefined} {...props} />
        )}
        initialRouteName="Survey"
      >
        <Tab.Screen name="Survey">
          {(props) => <FeedSurvey {...props} category={category} />}
        </Tab.Screen>
        <Tab.Screen name="Post">
          {(props) => <FeedPost {...props} category={category} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default FeedTop;
