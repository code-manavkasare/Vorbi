import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Dimensions } from 'react-native';
import theme from '../../../../theme';
import MyTabBar from '../../profiletababar';
import Post from './Post';
import Survey from './Survey';

const { height } = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        contentContainerStyle: {
          height: height * 0.075,
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
      initialRouteName="Post"
    >
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Survey" component={Survey} />
    </Tab.Navigator>
  );
}
