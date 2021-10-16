import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import theme from '../../../../theme';
import CrossCircle from '../../../icons/CrossCircle';

export default function Info({ navigation }) {
  const handleExit = () => navigation.goBack();

  return (
    <View style={styles.screen}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Info</Text>
        <TouchableWithoutFeedback onPress={handleExit}>
          <View>
            <CrossCircle />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>For Verified Profiles</Text>
        <Text style={styles.text}>
          We offer custom settings for verified users, to target a specific set
          of audience and to view analytics in their dashboard.
        </Text>
        <Text style={styles.text}>
          Copy If you’re not verified, you can check our subscription plans{' '}
          <Text style={{ textDecorationLine: 'underline' }}>here.</Text>
        </Text>
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
    width: theme.width * 0.75,
    alignSelf: 'center',
    marginVertical: theme.height * 0.075,
  },
  heading: {
    fontSize: 30,
    color: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#B3B7CD',
    marginVertical: 15,
  },
  leftContainer: {
    marginHorizontal: theme.width * 0.25 * 0.5,
  },
  tile: {
    marginBottom: 50,
  },
});
