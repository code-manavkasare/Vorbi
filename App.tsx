import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LogBox, SafeAreaView, StatusBar, View } from 'react-native';
import { Provider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import MyTabBar from './components/tabbars/mytabbar';
import { auth } from './firebase';
import Feed from './pages/feed/feed';
import Landing from './pages/landing/landing';
import ForgotPassword from './pages/login/ForgotPassword';
import Login from './pages/login/login';
import OtpVerification from './pages/login/OtpVerification';
import Signup from './pages/login/Signup';
import UserInfo from './pages/login/UserInfo';
import News from './pages/news/news';
import Notifications from './pages/notification/notification';
import Profile from './pages/profile/profile';
import Survey from './pages/survey/index';
import theme from './theme';
import { UserContext } from './utils/context';
import { getUser, updateUser } from './utils/db';

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
  const [currentUser, loading, error] = useAuthState(auth);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser) handleGetFirestoreUser();
  }, [currentUser]);

  const handleCheckCreds = async (_user: any) => {
    const user1 = await handleDaily(_user);
    const user2 = await handleWeekly(_user);
    return { ...user1, ...user2 };
  };

  const handleDaily = async (_user: any) => {
    if (
      _user.lastDailyUpdate &&
      Date.now() - _user.lastDailyUpdate >= 1000 * 60 * 60 * 24
    ) {
      await updateUser(
        {
          lastDailyUpdate: Date.now(),
          credsFromFeed: 0,
        },
        _user.uid
      );
      return {
        ..._user,
        lastDailyUpdate: Date.now(),
        credsFromFeed: 0,
      };
    } else if (!_user.lastDailyUpdate) {
      await updateUser(
        {
          lastDailyUpdate: Date.now(),
        },
        _user.uid
      );
      return {
        ..._user,
        lastDailyUpdate: Date.now(),
      };
    } else return _user;
  };

  const handleWeekly = async (_user: any) => {
    if (
      _user.lastWeeklyUpdate &&
      Date.now() - _user.lastWeeklyUpdate >= 1000 * 60 * 60 * 24 * 7
    ) {
      if (_user.weeklyCreds === 0) {
        await updateUser(
          {
            lastWeeklyUpdate: Date.now(),
            credibility: _user.credibility - 10,
          },
          _user.uid
        );
        return {
          ..._user,
          lastWeeklyUpdate: Date.now(),
          credibility: _user.credibility - 10,
        };
      } else {
        await updateUser(
          {
            lastWeeklyUpdate: Date.now(),
            weeklyCreds: 0,
          },
          _user.uid
        );
        return {
          ..._user,
          lastWeeklyUpdate: Date.now(),
          weeklyCreds: 0,
        };
      }
    } else if (!_user.lastWeeklyUpdate) {
      await updateUser(
        {
          lastWeeklyUpdate: Date.now(),
        },
        _user.uid
      );
      return {
        ..._user,
        lastWeeklyUpdate: Date.now(),
      };
    } else {
      return _user;
    }
  };

  const handleGetFirestoreUser = async () => {
    const _user = await getUser(auth.currentUser.uid);
    console.log('_user', _user);
    const __user = await handleCheckCreds(_user);
    console.log('__user', __user);
    setUser(__user);
  };

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
    <UserContext.Provider value={{ user, setUser }}>
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
                {user ? (
                  <Stacks.Navigator
                    screenOptions={{
                      headerShown: false,
                    }}
                  >
                    <Stacks.Screen name="Main" component={BottomTabsNav} />
                  </Stacks.Navigator>
                ) : (
                  <AuthStackNav />
                )}
              </NavigationContainer>
            </View>
          ) : (
            <></>
          )}
        </SafeAreaView>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </UserContext.Provider>
  );
}

const AuthStack = createStackNavigator();

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Landing" component={Landing} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
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

      <AuthStack.Screen name="OtpVerification" component={OtpVerification} />
      <AuthStack.Screen name="UserInfo" component={UserInfo} />
    </AuthStack.Navigator>
  );
};

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
  UserInfo: {
    type: string;
    emailParam?: string;
    passwordParam?: string;
    credentialParam?: any;
    phoneParam?: string;
  };
  ForgotPassword: undefined;
};
export type TabsParamList = {
  Survey: undefined;
  Notifications: undefined;
  Feed: undefined;
  News: undefined;
  Profile: undefined;
};
