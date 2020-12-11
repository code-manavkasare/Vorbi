import React from 'react';
import {View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeedSurvey from '../../pages/feed/feedsurvey';
import FeedPost from '../../pages/feed/feedpost';
import MyTabBar from '../tabbars/feedtabbar'
import Sort from '../sortingtop';

const Tab = createMaterialTopTabNavigator();
const FeedTop = () => {
return (
  <View style={{flex:1}}>
  <Sort />
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Survey"
    >
      <Tab.Screen name="Survey" component={FeedSurvey} />
      <Tab.Screen name="Post" component={FeedPost} />
    </Tab.Navigator>
  </View>
);
}


export default FeedTop;
