import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from './Createposttabbar';
import Svgs from '../svgs';
import Theme from '../../theme';
import NewPost from './NewPost';
import NewSurvey from './Newsurvey';
const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          paddingTop: 20,
          paddingRight: 50,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: Theme.background.primary100,
        }}
      >
        <TouchableOpacity
          style={{ padding: 10, width: 50 }}
          onPress={() => navigation.navigate('Home')}
        >
          <Svgs type="Back" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: Theme.text.primary100,
              fontSize: 28,
            }}
          >
            Create New
          </Text>
        </View>
      </View>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        initialRouteName="NewPost"
        style={{
          flex: 5,
        }}
      >
        <Tab.Screen name="NewPost" component={NewPost} />
        <Tab.Screen name="NewSurvey" component={NewSurvey} />
      </Tab.Navigator>
    </>
  );
};
export default Profile;
