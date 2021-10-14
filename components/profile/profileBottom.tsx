import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Info from './Info';
import Saved from './profilesaved';
import MyTabBar from './profiletababar';

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.text.Yellow,
        }}
        tabBar={(props) => (
          <MyTabBar
            sceneContainerStyle={undefined}
            backgroundColor="#1F2232"
            {...props}
          />
        )}
        initialRouteName="Info"
        style={{
          flex: 5,
        }}
      >
        {/* <Tab.Screen name="Stats" component={Stats} /> */}
        {/* <Tab.Screen name="Create" component={Create} /> */}
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Saved" component={Saved} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#1F2232',
  },
});
export default Profile;
