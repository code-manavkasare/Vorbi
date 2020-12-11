import React from 'react';
import {  View } from 'react-native';
import ProfileBottom from '../../components/profile/profileBottom';
import ProfileTop from '../../components/profile/profileTop';
import NewEle from '../../components/profile/newElement'
import CreatePost from '../../components/profile/create';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () =>{
  return (
    <View style={{ backgroundColor: '#2A2E42', flex: 1 }}>
      <View style={{ flex: 1.3 }}>
        <ProfileTop />
      </View>
      <View style={{ flex: 3 }}>
        <ProfileBottom />
      </View>
    </View>
  );
}
const Profile = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="NewEle" component={NewEle} />
    </Stack.Navigator>
  );
};

export default Profile;
