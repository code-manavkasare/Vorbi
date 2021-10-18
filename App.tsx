import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LogBox, SafeAreaView, StatusBar, View } from 'react-native';
import MyTabBar from './components/tabbars/mytabbar';
import { auth } from './firebase';
import Feed from './pages/feed/feed';
import Landing from './pages/landing/landing';
import Signup from './pages/login/Signup';
import Login from './pages/login/login';
import OtpVerification from './pages/login/OtpVerification';
import UserInfo from './pages/login/UserInfo';
import News from './pages/news/news';
import Notifications from './pages/notification/notification';
import Profile from './pages/profile/profile';
import Survey from './pages/survey/index';
import ForgotPassword from './pages/login/ForgotPassword';
import { Provider } from 'react-native-paper';
import theme from './theme';
LogBox.ignoreAllLogs();
const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'KdamThmor-Regular': require('./assets/fonts/KdamThmor-Regular.ttf'),
  });
};
const Tab = createBottomTabNavigator<TabsParamList>();
const Stacks = createStackNavigator<StackParamList>();

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
    <Provider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#1f2232',
        }}
      >
        <StatusBar backgroundColor={'#1f2232'} />
        {!loading ? (
          <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
            <NavigationContainer>
              <Stacks.Navigator
                initialRouteName={user ? 'Main' : 'Landing'}
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stacks.Screen name="Landing" component={Landing} />
                <Stacks.Screen name="Signup" component={Signup} />
                <Stacks.Screen name="Login" component={Login} />
                <Stacks.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                  options={{
                    headerShown: true,
                    headerTitle: '',
                    headerTintColor: '#fff',

                    headerStyle: {
                      backgroundColor: theme.background.primary100,
                      elevation: 0,
                      shadowOpacity: 0,
                    },
                  }}
                />

                <Stacks.Screen
                  name="OtpVerification"
                  component={OtpVerification}
                />
                <Stacks.Screen name="UserInfo" component={UserInfo} />
                <Stacks.Screen name="Main" component={BottomTabsNav} />
              </Stacks.Navigator>
            </NavigationContainer>
          </View>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </Provider>
  );
}

const BottomTabsNav: React.FunctionComponent<
  StackScreenProps<StackParamList, 'Main'>
> = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Survey"
      tabBarOptions={{
        activeTintColor: '#aa9211',
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Survey" component={Survey} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export type StackParamList = {
  Landing: undefined;
  Login: undefined;
  Main: undefined;
  Signup: undefined;
  OtpVerification: { phone: string; type: string };
  UserInfo: { type: string };
  ForgotPassword: undefined;
};
export type TabsParamList = {
  Survey: undefined;
  Notifications: undefined;
  Feed: undefined;
  News: undefined;
  Profile: undefined;
};
