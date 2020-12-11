import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase, { firestore, auth } from './firebase';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Home from './auth/home';
import News from './pages/news/news';
import Survey from './pages/survey/index';
import Profile from './pages/profile/profile';
import Notifications from './pages/notification/notification';
import Feed from './pages/feed/feed';
import MyTabBar from './components/tabbars/mytabbar';

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
  const [user, setuser] = useState(false);

  const time = new Date();
  useEffect(() => {}, []);
  auth.onAuthStateChanged((currentuser) => {
    if (currentuser) setuser(true);
    else setuser(false);
  });
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
      {!auth.currentUser ? (
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

// const Tab = createBottomTabNavigator();
// const areacode = [
//   110019,
//   110020,
//   110021,
//   110022,
//   110023,
//   110024,
//   110025,
//   110026,
//   110027,
//   110028,
//   110019,
// ];
// const data = [
//   { type: 'health', index: 5 },
//   { type: 'infrastructure', index: 7 },
//   { type: 'social', index: 3 },
// ];
// areacode.forEach((item) => {
//   firestore.collection('areaCodes').doc(areacode).set({
//     areacode: item,
//     index: 3,
//   });
//   data.foreach((item) => {
//     firestore
//       .collection('areaCodes')
//       .doc(areacode)
//       .collection('parameters')
//       .add({
//         type: item.type,
//         progress: item.progress,
//       });
//   });
// });

const example = [
  {
    data:
      'Cleaning drive is being run in my locality,it is so nice to see people devoting their time to clean the environment',
    name: 'John Doe',
    type: 'environment',
  },
  {
    data:
      "Pfizer has made a new development in fighting the pandemic, they've successfully tested a new vaccine with an efficacy of 95%.",
    name: 'Jane Doe',
    type: 'health',
  },
  {
    data:
      'Results of the 2020 US election are here and Joe Biden is our new president!',
    name: 'John Doe',
    type: 'social',
  },
  {
    data:
      "Environment Minister - We're collecting ideas to help improve the existing policies and ensure that stringent norms can be put in place to fight climate change, and to move forward with sustainable development. Submit feedback below.",
    name: 'Jane Doe',
    type: 'environment',
  },
  {
    data:
      "Health Minister - I feel there is a need to address the fact that the corona virus is still very much prevalent and this goes out as a call to all the people to ensure that they're staying at home and following social norms. Let's fight this virus together!",
    name: 'John Doe',
    type: 'Health',
  },

  {
    data:
      'Chief Minister of Gujarat - Proud to announce the successful construction of the Statue of Unity, which is built in remembrance of Indian statesman and independence activist Vallabhbhai Patel. This will serve as a symbol of unity and sovereignty, and will attract tourism opportunities in the future!',
    name: 'Jane Doe',
    type: 'infrastructure',
  },
  {
    data:
      'Indian Government started working on low temperature storage solutions for storing and transporting Pfizer vaccine',
    name: 'Jane Doe',
    type: 'technology',
  },
];
const survey = [
  {
    type: 'Poll',
    data: 'do you support the huawei ban',
    topic: 'technology',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
  {
    type: 'Rating',
    data:
      'how much do you support the Governments decision to introduce the Farmers Bill',
    topic: 'social',
    list: [],
  },
  {
    type: 'Rating',
    data: 'Rate the health facilities available in your locality',
    topic: 'health',
    list: [],
  },
  {
    type: 'Poll',
    data: 'What do you think govt needs to work on in your locality',
    topic: 'infrastructure',
    list: ['hospitals', 'roads', 'markets', 'safety'],
  },
  {
    type: 'Rating',
    data: 'Rate the cleanliness in your locality',
    topic: 'environment',
    list: [],
  },
  {
    type: 'Poll',
    data: 'Do you think demonetisation was the right step for indian economy',
    topic: 'social',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
];
