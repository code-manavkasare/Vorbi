import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import theme from '../../theme';

import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');

export default function Info() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <Tile
            heading="Feedbacks"
            description="The government should ensure proper clarifications are made avaiable to ..."
            responses="500 Responses"
            upvotes="100 Upvotes"
          />
          <Tile
            heading="Your Suveys"
            description="The government should ensure proper clarifications are made avaiable to ..."
            responses="500 Responses"
          />
        </View>

        <View style={styles.row}>
          <Tile
            heading="Grievances"
            description="The government should ensure proper clarifications are made avaiable to ..."
            responses="500 Responses"
          />
          <Tile
            heading="Monthly Surveys"
            description="The government should ensure proper clarifications are made avaiable to ..."
            responses="500 Responses"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const Tile = ({ heading, description, responses, upvotes }) => (
  <LinearGradient colors={['rgba(42,46,66, 1)', 'rgba(42,46,66,0)']}>
    <View style={styles.tile}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.tileCaption}>{responses}</Text>
      <Text style={styles.tileCaption}>{upvotes}</Text>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.primary100,
  },
  row: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  tile: {
    width: width * 0.495,
    height: height * 0.25,
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 30,
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  tileCaption: {
    color: '#B3B7CD',
    fontSize: 18,
  },
});
