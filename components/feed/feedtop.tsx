import React, { useState } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeedSurvey from '../../pages/feed/feedsurvey';
import FeedPost from '../../pages/feed/feedpost';
import MyTabBar from '../tabbars/feedtabbar';
import Sort from '../Sort';
import theme from '../../theme';

const Tab = createMaterialTopTabNavigator();

const FeedTop = () => {
  // return (
  //   <View style={{ flex: 1 }}>
  //     <Sort
  //       categories={categories}
  //       category={category}
  //       setCategory={setCategory}
  //     />
  //     <Tab.Navigator
  //       tabBar={(props) => (
  //         <MyTabBar sceneContainerStyle={undefined} {...props} />
  //       )}
  //       initialRouteName="Survey"
  //     >
  //       <Tab.Screen name="Survey">
  //         {(props) => <FeedSurvey {...props} category={category} />}
  //       </Tab.Screen>
  //       <Tab.Screen name="Post">
  //         {(props) => <FeedPost {...props} category={category} />}
  //       </Tab.Screen>
  //     </Tab.Navigator>
  //   </View>
  // );
  return (
    <Tab.Navigator
      tabBarOptions={{
        contentContainerStyle: {
          height: theme.height * 0.075,
          elevation: 0,
          shadowOpacity: 0,
        },
        labelStyle: {
          fontSize: 16,
          textTransform: 'none',
        },
        style: {
          backgroundColor: theme.background.primary100,
        },
        inactiveTintColor: theme.text.primary100,
        activeTintColor: theme.text.Yellow,
        indicatorStyle: {
          backgroundColor: theme.text.Yellow,
        },
      }}
      initialRouteName="FeedPost"
    >
      <Tab.Screen
        name="FeedPost"
        component={FeedPost}
        options={{ title: 'Posts' }}
      />
      <Tab.Screen
        name="FeedSurvey"
        component={FeedSurvey}
        options={{ title: 'Surveys' }}
      />
    </Tab.Navigator>
  );
};

export default FeedTop;
