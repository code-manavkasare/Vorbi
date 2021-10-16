import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import theme from '../../../theme';
import Info from './components/Info';
import CustomSettings from './components/CustomSettings';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
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
      <Stack.Screen
        name="CustomSettings"
        component={CustomSettings}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.background.primary100,
          },
          headerTintColor: theme.text.primary100,
          headerTitle: 'Custom Settings',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
          },
        }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
