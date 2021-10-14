import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
