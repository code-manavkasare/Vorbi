import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabBar from './profiletababar';
import Stats from './stats';
import Saved from './profilesaved';
import Create from './create';

const Tab = createMaterialTopTabNavigator();
const Profile = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <MyTabBar
          sceneContainerStyle={undefined}
          backgroundColor="#1F2232"
          {...props}
        />
      )}
      initialRouteName="Stats"
      style={{
        flex: 5,
      }}
    >
      {/* <Tab.Screen name="Stats" component={Stats} /> */}
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2232',
    marginBottom: 10,
    flex: 2.5,
  },
});
export default Profile;
