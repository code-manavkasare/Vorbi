import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../../components/profile';
import CreatePost from '../../components/profile/create';
import NewEle from '../../components/profile/newElement';
import Settings from '../settings';

const Stack = createStackNavigator();

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
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default Profile;
