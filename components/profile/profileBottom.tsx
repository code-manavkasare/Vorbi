import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useContext, useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import theme from '../../theme';
import { UserContext } from '../../utils/context';
import Create from '../icons/Create';
import Info from './Info';
import Saved from './profilesaved';

const { width, height } = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }) => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      {(user.credibility > 999 || user.type === 3) && (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('CreatePost')}
        >
          <View style={styles.createIcon}>
            <Create />
          </View>
        </TouchableWithoutFeedback>
      )}
      <Tab.Navigator
        tabBarOptions={{
          contentContainerStyle: {
            height: theme.height * 0.075,
            elevation: 0,
            shadowOpacity: 0,
          },
          showIcon: true,
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
        initialRouteName="Info"
      >
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <StatsIcon
                color={focused ? theme.background.primaryYellow : '#6D7187'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => (
              <SavedIcon
                color={focused ? theme.background.primaryYellow : '#6D7187'}
              />
            ),
          }}
        />
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
  createIcon: {
    position: 'absolute',
    top: -40,
    left: width * 0.4275,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background.primary100,
    zIndex: 1000,
  },
});
export default Profile;

const SavedIcon = ({ color }) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 42 56" fill="none">
      <Path
        d="M20.9995 39.4C18.1995 41.7 15.4995 44 12.6995 46.3C10.1995 48.4 7.69952 50.5 5.09952 52.6C4.09952 53.4 3.19952 53.4 2.49952 52.6C2.19952 52.3 2.09952 51.9 1.99952 51.5C1.89952 51.3 1.99952 51 1.99952 50.7C1.99952 35.3 1.99952 19.9 1.99952 4.5C1.99952 2.6 2.59952 2 4.49952 2C15.4995 2 26.5995 2 37.5995 2C38.9995 2 39.9995 2.6 39.9995 4.5C39.9995 19.9 39.9995 35.4 39.9995 50.8C39.9995 51.2 39.9995 51.6 39.8995 51.9C39.4995 53.1 37.9995 53.5 36.9995 52.6C32.1995 48.6 27.3995 44.6 22.5995 40.6C22.0995 40.2 21.5995 39.8 20.9995 39.4Z"
        fill={color}
        stroke={color}
        strokeWidth="6"
        strokeMiterlimit="10"
      />
    </Svg>
  );
};

const StatsIcon = ({ color }) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 102 93" fill="none">
      <Path
        d="M101.775 92.9999C93.2754 92.9999 84.7754 92.9999 76.2754 92.9999C76.2754 92.3894 76.2754 91.9824 76.2754 91.5754C76.2754 63.2888 76.2754 35.0021 76.2754 6.71553C76.2754 2.44201 78.7359 0 83.657 0C87.4596 0 91.2622 0 95.0649 0C99.3149 0 101.999 2.44201 101.999 6.30853C101.999 34.7986 101.999 63.0853 101.999 91.5754C101.775 91.9824 101.775 92.3894 101.775 92.9999Z"
        fill={color}
      />
      <Path
        d="M63.5264 92.9999C55.0263 92.9999 46.75 92.9999 38.25 92.9999C38.25 92.3894 38.25 91.9824 38.25 91.5754C38.25 71.0218 38.25 50.4683 38.25 29.9147C38.25 25.6412 41.6053 23.1992 45.4079 23.4027C49.4342 23.6062 53.4606 23.4027 57.2632 23.4027C60.8421 23.4027 63.5264 25.8447 63.5264 29.1007C63.5264 50.0613 63.5264 71.0218 63.5264 91.9824C63.5264 92.1859 63.5264 92.5929 63.5264 92.9999Z"
        fill={color}
      />
      <Path
        d="M25.2764 93.0001C16.7763 93.0001 8.50001 93.0001 0 93.0001C0 92.5931 0 91.9826 0 91.5755C0 82.6215 0 73.464 0 64.5099C0 60.4399 2.46053 58.2014 6.93422 58.2014C10.9605 58.2014 14.9869 58.2014 19.0132 58.2014C22.5921 58.2014 25.2764 60.6434 25.2764 63.8994C25.2764 73.464 25.2764 82.825 25.2764 92.3896C25.2764 92.3896 25.2764 92.5931 25.2764 93.0001Z"
        fill={color}
      />
    </Svg>
  );
};
