import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Home from '../../components/profile';
import CreatePost from '../../components/profile/create/index';
import NewEle from '../../components/profile/newElement';
import theme from '../../theme';
import Settings from '../settings';

const Stack = createStackNavigator();

const Profile = ({ navigation, route }) => {
  const setTabBarVisible = () => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['Settings', 'CreatePost'];
    if (hideOnScreens.indexOf(routeName) > -1)
      return navigation.setOptions({ tabBarVisible: false });
    return navigation.setOptions({ tabBarVisible: true });
  };

  useEffect(() => {
    setTabBarVisible();
  }, [route]);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="CreatePost" component={CreatePost} /> */}
      <Stack.Screen name="NewEle" component={NewEle} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.background.primary100,
          },
          headerTintColor: theme.text.primary100,
          headerTitle: 'Create New',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Profile;
