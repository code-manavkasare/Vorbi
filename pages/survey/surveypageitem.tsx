import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Exclamation from '../../components/icons/Exclamation';
import TickCircle from '../../components/icons/TickCircle';
import { colorpicker } from '../../utilities';
import { UserContext } from '../../utils/context';

const Surveypageitem = ({
  completedBy,
  type,
  title,
  progression,
  navigation,
}) => {
  const { user } = useContext(UserContext);
  const [done, setDone] = useState(
    completedBy ? completedBy.indexOf(user.uid) !== -1 : false
  );
  var progress = parseFloat(progression * 10),
    circumference = 170;

  const x = ((100 - progress) / 100) * circumference;

  const handleSetDone = (e) => setDone(e);

  return (
    <TouchableOpacity
      style={styles.itemouter}
      disabled={done}
      onPress={() =>
        navigation.navigate('SurveyPage', { title, handleSetDone })
      }
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
        {done && <TickCircle />}
        {!done && <Exclamation />}
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
