import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Filled = () => {
  return (
    <Svg width="28" height="28" viewBox="0 0 62 62" fill="none">
      <Circle
        cx="31"
        cy="31"
        r="27"
        fill="#FFB30F"
        stroke="#FFB30F"
        strokeWidth="8"
      />
      <Circle
        cx="31"
        cy="31"
        r="27"
        fill="#FFB30F"
        stroke="#FFB30F"
        strokeWidth="8"
      />
    </Svg>
  );
};
const Unfilled = () => {
  return (
    <Svg width="28" height="28" viewBox="0 0 62 62" fill="none">
      <Circle
        cx="31"
        cy="31"
        r="27"
        fill="#363C5A"
        stroke="#363C5A"
        strokeWidth="8"
      />
      <Circle
        cx="31"
        cy="31"
        r="27"
        fill="#363C5A"
        stroke="#363C5A"
        strokeWidth="8"
      />
    </Svg>
  );
};

let i = true;
const StarRating = ({ setbuttoncolor }) => {
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of Stars

  const [maxRating] = useState([1, 2, 3, 4, 5]);
  if (defaultRating != 0 && i) {
    i = false;
    setbuttoncolor('white');
  }
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              style={styles.TouchableOpacity}
              activeOpacity={0.7}
              key={key}
              onPress={() => setDefaultRating(item)}
            >
              {item <= defaultRating ? <Filled /> : <Unfilled />}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CustomRatingBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default StarRating;
