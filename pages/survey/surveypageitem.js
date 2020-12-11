import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { colorpicker } from '../../utilities';

const Surveypageitem = ({ done, type, title, progression, navigation }) => {
  var progress =parseFloat (progression * 10),
    circumference = 170;

  const x = ((100 - progress) / 100) * circumference;

  return (
    <TouchableOpacity
      style={styles.itemouter}
      onPress={() => navigation.navigate('SurveyPage')}
    >
      <View
        style={{
          transform: [{ rotateY: '180deg' }, { rotateZ: '-90deg' }],
        }}
      >
        <Svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          style={styles.progress}
        >
          <Circle
            stroke={colorpicker(type)}
            strokeLinecap="round"
            cx="30"
            cy="30"
            r="27"
            strokeWidth="5"
            strokeDasharray="170"
            strokeDashoffset={x}
          ></Circle>
        </Svg>
      </View>
      <View style={styles.progresstext}>
        <Text
          style={[
            styles.progresstextinner,
            { transform: [{ translateX: -40 }] },
          ]}
        >
          {progression.toFixed(1)}
        </Text>
        <Text
          style={[styles.progresstitle, { transform: [{ translateX: -10 }] }]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.progressicon}>
        {done && (
          <Svg width="20" height="20" viewBox="0 0 52 52" fill="none">
            <Path
              d="M25.8318 52C11.5738 52 -0.50367 40.2581 -0.000443973 24.9935C0.33504 12.0774 11.0705 -0.335487 26.6705 -3.27686e-06C40.4254 0.335481 51.9996 11.2387 51.9996 26.3355C51.9996 40.2581 40.5931 52 25.8318 52ZM25.8318 48.1419C38.077 48.1419 47.9738 38.5806 48.1415 26.3355C48.3092 13.9226 38.7479 4.19355 26.6705 3.85806C14.0899 3.52258 4.52859 13.2516 3.85762 24.6581C3.18665 37.2387 12.9157 47.9742 25.8318 48.1419Z"
              fill="#09BC8A"
            />
            <Path
              d="M22.8122 31.3677C23.9864 30.0258 24.9928 28.6839 25.9993 27.3419C28.3477 24.3226 30.6961 21.1355 33.0445 18.1161C33.7154 17.2774 34.3864 16.9419 35.3928 16.9419C36.2316 17.1097 36.7348 17.6129 37.0703 18.4516C37.4057 19.1226 37.0703 19.7935 36.7348 20.4645C32.8767 25.4968 28.8509 30.529 24.9928 35.729C23.9864 36.9032 22.6445 37.071 21.4703 36.0645C19.2896 34.0516 16.9412 31.871 14.7606 29.8581C14.0896 29.1871 13.7541 28.5161 14.0896 27.5097C14.4251 26.671 15.0961 26.1677 15.767 26C16.6057 25.8322 17.2767 26.3355 17.7799 26.8387C19.4574 28.1806 20.967 29.6903 22.8122 31.3677Z"
              fill="#09BC8A"
            />
          </Svg>
        )}
        {!done && (
          <Svg width="20" height="20" viewBox="0 0 11 50" fill="none">
            <Path
              d="M10.5463 17.3688C10.3652 21.4476 10.2294 25.5723 10.0483 29.6511C9.95778 31.8967 8.64503 33.5466 6.51745 34.1424C4.11828 34.784 1.40223 32.9966 1.13062 30.5218C0.904285 28.7345 0.859018 26.9013 0.81375 25.114C0.63268 21.1268 0.45161 17.1855 0.315808 13.1983C0.180005 10.7235 0.0442029 8.20287 -0.00106463 5.72808C-0.0915996 2.84082 1.9907 0.457684 4.88782 0.045218C7.46807 -0.321418 10.0936 1.4201 10.7726 4.07822C10.9989 5.08646 10.9989 6.14054 10.9537 7.19462C10.8631 10.586 10.7273 13.9774 10.5463 17.3688Z"
              fill="#FFB30F"
            />
            <Path
              d="M0.452148 44.8213C0.452148 42.0257 2.76079 39.6425 5.56737 39.6425C8.32869 39.6425 10.6373 41.9798 10.6373 44.7754C10.6373 47.7543 8.37396 49.9542 5.56737 49.9542C2.71552 50 0.497416 47.7543 0.452148 44.8213Z"
              fill="#FFB30F"
            />
          </Svg>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Surveypageitem;

const styles = StyleSheet.create({
  itemouter: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  progress: {},
  progresstext: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 4,
    fontFamily: 'Poppins-Regular',
  },
  progresstextinner: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  progresstitle: {
    color: '#6D7187',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  progressicon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
