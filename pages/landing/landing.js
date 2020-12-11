import React, { Component, useCallback, useEffect } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { storage } from '../../firebase';

// const landing = () => {
//   let images = [];
//   const callback = useCallback(async () => {
//     await storage
//       .child('Group 121.jpg')
//       .getDownloadURL()
//       .then((url) => {
//         images.push(url);
//         console.log(url);
//       });
//   }, []);
//   useEffect(() => {
//     callback();
//   }, []);
//   return <App images={images} />;
// };
// export default landing;
const deviceWidth = Dimensions.get('window').width;
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;
const images = [
  'https://firebasestorage.googleapis.com/v0/b/lookout-b4bd7.appspot.com/o/Group%20121.jpg?alt=media&token=fb1704be-ef18-404c-9aad-8b1bb5093a30',
  'https://firebasestorage.googleapis.com/v0/b/lookout-b4bd7.appspot.com/o/Group%20122.jpg?alt=media&token=c0be428c-0686-4f77-bb0d-b74d83e6a6f7',
  'https://firebasestorage.googleapis.com/v0/b/lookout-b4bd7.appspot.com/o/Group%20123.jpg?alt=media&token=f9c81cce-e277-435d-b51f-4b76ba579b63',
  'https://firebasestorage.googleapis.com/v0/b/lookout-b4bd7.appspot.com/o/Group%20124.jpg?alt=media&token=b838f818-4cd8-46c9-bd70-9f7b741cca54',
  'https://firebasestorage.googleapis.com/v0/b/lookout-b4bd7.appspot.com/o/Group%20125.jpg?alt=media&token=236f1a85-a7df-4bd8-b755-d112b6814c57',
];
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.navigation,
    };
  }
  numItems = images.length;
  itemWidth = FIXED_BAR_WIDTH / this.numItems - (this.numItems - 1) * BAR_SPACE;
  animVal = new Animated.Value(0);
  render() {
    let imageArray = [];
    let barArray = [];
    images.forEach((image, i) => {
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{ uri: image }}
          style={{ width: deviceWidth }}
        />
      );
      imageArray.push(thisImage);

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      });

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [{ translateX: scrollBarVal }],
              },
            ]}
          />
        </View>
      );
      barArray.push(thisBar);
    });

    return (
      <View style={styles.container} flex={1}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.animVal } } },
          ])}
        >
          {imageArray}
        </ScrollView>
        <View style={styles.barContainer}>{barArray}</View>
        <View style={{ marginBottom: 30 }}>
          <TouchableOpacity
            style={{
              margin: 10,
              backgroundColor: '#FFB30F',
              width: SCREEN_WIDTH * 0.8,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              this.state.navigation.navigate('Login');
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                color: 'white',
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A2E42',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: SCREEN_HEIGHT - 140,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#1F2232',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#FFB30F',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
