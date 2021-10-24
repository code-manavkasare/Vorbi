import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useContext } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import theme from '../../theme';
import { UserContext } from '../../utils/context';
import Create from '../icons/Create';
import Info from './Info';
import Saved from './profilesaved';
import MyTabBar from './profiletababar';

const { width, height } = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }) => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      {user.credibility >= 500 && (
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
          activeTintColor: theme.text.Yellow,
        }}
        tabBar={(props) => (
          <MyTabBar
            sceneContainerStyle={undefined}
            backgroundColor="#1F2232"
            {...props}
          />
        )}
        initialRouteName="Info"
        style={{
          flex: 5,
        }}
      >
        {/* <Tab.Screen name="Stats" component={Stats} /> */}
        {/* <Tab.Screen name="Create" component={Create} /> */}
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Saved" component={Saved} />
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
