import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Settings from '../../components/settings';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
