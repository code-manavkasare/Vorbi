import React from 'react';
import { View} from 'react-native';
import Main from './main';
import SurveyPage from './surveypage';
import PollPage from './pollPage';
import FinalPage from './finalPage';
import GraphItem from './graph';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Survey = ({navigation}) => {

    return (
      <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
        <Main navigation={navigation} />
      </View>
    ); 
}

function HomeScreen() {
  return (
   
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Survey} />
        <Stack.Screen name="SurveyPage" component={SurveyPage} />
        <Stack.Screen name="PollPage" component={PollPage} />
        <Stack.Screen name="FinalPage" component={FinalPage} />
        <Stack.Screen name="GraphItem" component={GraphItem} />
      </Stack.Navigator>
    
  );
}

export default HomeScreen;