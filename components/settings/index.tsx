import React, { useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import theme from '../../theme';
import CrossCircle from '../icons/CrossCircle';

const { width, height } = Dimensions.get('screen');

export default function ({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, []);

  const handleExit = () => navigation.goBack();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.navigate('Landing');
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Settings</Text>
        <TouchableWithoutFeedback onPress={handleExit}>
          <View>
            <CrossCircle />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.tile} onPress={handleLogout}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Text style={styles.text}>Apply for verified</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.75,
    alignSelf: 'center',
    marginVertical: height * 0.075,
  },
  heading: {
    fontSize: 30,
    color: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },
  leftContainer: {
    marginLeft: width * 0.25 * 0.5,
  },
  tile: {
    marginBottom: 50,
  },
});
