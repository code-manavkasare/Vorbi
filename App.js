import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './firebase';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import News from './pages/news/news';
import Survey from './pages/survey/index';
import Profile from './pages/profile/profile';
import Notifications from './pages/notification/notification';
import Feed from './pages/feed/feed';
import MyTabBar from './components/tabbars/mytabbar';
import { useAuthState } from 'react-firebase-hooks/auth';
const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'KdamThmor-Regular': require('./assets/fonts/KdamThmor-Regular.ttf'),
  });
};
const Tab = createBottomTabNavigator();
const Stacks = createStackNavigator();

let i = 0;
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const time = new Date();
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1f2232',
        fontFamily: 'Poppins-Regular',
      }}
    >
      <StatusBar backgroundColor={'#1f2232'} />
      {!user ? (
        <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
          <NavigationContainer style={styles.tab}>
            <Stacks.Navigator
              initialRouteName="Landing"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stacks.Screen name="Landing" component={Landing} />
              <Stacks.Screen name="Login" component={Login} />
            </Stacks.Navigator>
          </NavigationContainer>
        </View>
      ) : (
        <NavigationContainer style={styles.tab}>
          <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            initialRouteName="Survey"
            tabBarOptions={{
              activeTintColor: '#aa9211',
            }}
            style={styles.tab}
          >
            <Tab.Screen name="News" component={News} />
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Survey" component={Survey} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    backgroundColor: '#1f2232',
  },
  carouselcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});
    // "react-native-gesture-handler": "^1.9.0",
