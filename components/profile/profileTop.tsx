import React, { useContext, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated, { SpringUtils, Value } from 'react-native-reanimated';
import {
  mix,
  useSpringTransition,
  useTimingTransition,
} from 'react-native-redash';
import { UserContext } from '../../utils/context';
import ChevronDown from '../icons/ChevronDown';
import Edit from '../icons/Edit';
import Settings from '../icons/Settings';
import Tick from '../icons/Tick';
import Mood from './mood';

const { width, height } = Dimensions.get('screen');

const Profile = ({ navigation }) => {
  const [showMore, setShowMore] = useState(false);
  const { user } = useContext(UserContext);

  const transition = useSpringTransition(showMore, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(20),
  });
  const opacityTransition = useTimingTransition(showMore, { duration: 1000 });
  const containerHeight = mix(transition, height * 0.3, height * 0.75);
  const rotateZ = mix(transition, 0, Math.PI);
  const opacity1 = mix(opacityTransition, 0, 1);
  const opacity2 = mix(opacityTransition, 1, 0);

  return (
    <Animated.View style={[styles.container, { height: containerHeight }]}>
      {showMore ? (
        <Animated.View style={[styles.largeContainer, { opacity: opacity1 }]}>
          <View style={styles.headingContainer}>
            <View />
            <TouchableOpacity>
              <Settings />
            </TouchableOpacity>
          </View>
          <View style={styles.verticalMoodContainer}>
            <Mood mood="happy" size="125" />
          </View>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{user && user.name}</Text>
            {user.credibility >= 500 && <Tick />}
          </View>
          <Text style={styles.rightText1}>{user && user.designation}</Text>
          <Text style={styles.rightText2}>
            {user && user.state}, {user && user.pinCode}
          </Text>
          <Text style={[styles.credibility]}>{user.credibility}</Text>
          <Text style={[styles.credibilitylower]}>Credibility</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.editProfileButton}
          >
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={styles.tiles}>
            <View style={styles.tile}>
              <Text style={styles.tileLeft}>Posts Made</Text>
              <Text style={styles.tileRight}>500</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.tileLeft}>Surveys Created</Text>
              <Text style={styles.tileRight}>50</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.tileLeft}>Upvotes</Text>
              <Text style={styles.tileRight}>2k</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.tileLeft}>Feedbacks</Text>
              <Text style={styles.tileRight}>3k</Text>
            </View>
            <View style={styles.tile}>
              <Text style={styles.tileLeft}>Filled Suveys/Posts</Text>
              <Text style={styles.tileRight}>250</Text>
            </View>
          </View>
        </Animated.View>
      ) : (
        <>
          <View style={styles.headingContainer}>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>{user && user.name}</Text>
              {user.credibility >= 500 && <Tick />}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Settings />
            </TouchableOpacity>
          </View>
          <Animated.View style={[styles.top, { opacity: opacity2 }]}>
            <View style={styles.left}>
              <Mood mood="happy" size="90" />
              <View>
                <Text style={[styles.credibility]}>{user.credibility}</Text>
              </View>
              <View>
                <Text style={[styles.credibilitylower]}>Credibility</Text>
              </View>
            </View>

            <Animated.View style={[styles.right]}>
              <Text style={styles.rightText1}>{user && user.designation}</Text>
              <Text style={styles.rightText2}>
                {user && user.state}, {user && user.pinCode}
              </Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('EditProfile')}
              >
                <View style={styles.editContainer}>
                  <Text style={styles.rightText3}>Edit Profile</Text>
                  <Edit />
                </View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </Animated.View>
        </>
      )}

      <TouchableWithoutFeedback onPress={() => setShowMore(!showMore)}>
        <View style={styles.showMoreContainer}>
          <Text style={styles.showMore}>Show more</Text>
          <Animated.View style={{ transform: [{ rotateZ }], marginTop: 5 }}>
            <ChevronDown color={undefined} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2E42',
    paddingBottom: 10,
    width,
    justifyContent: 'flex-start',
  },
  headingContainer: {
    width,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  usernameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  top: {
    marginTop: 10,
    paddingHorizontal: 25,
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 2.5,
    marginBottom: 50,
  },
  credibility: {
    color: '#fff',
    fontSize: 50,
  },
  credibilitylower: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  username: {
    fontSize: 24,
    color: '#ffff',
    marginRight: 15,
    fontWeight: 'bold',
  },
  left: {
    alignItems: 'center',
  },
  right: {
    marginLeft: 30,
  },
  rightText1: {
    fontSize: 24,
    marginVertical: 5,
    color: '#B3B7CD',
  },
  rightText2: {
    fontSize: 18,
    marginVertical: 5,
    color: '#fff',
  },
  rightText3: {
    fontSize: 18,
    color: '#B3B7CD',
    marginRight: 10,
    marginVertical: 5,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showMoreContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  showMore: {
    fontSize: 16,
    color: '#B3B7CD',
    marginRight: 5,
  },
  largeContainer: {
    height: height * 0.675,
    alignItems: 'center',
    paddingVertical: 20,
  },
  verticalMoodContainer: {
    marginVertical: 15,
  },
  editProfileButton: {
    marginTop: 20,
    width: width * 0.4,
    height: 40,
    borderColor: '#B3B7CD',
    borderWidth: 0.3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileText: {
    color: '#B3B7CD',
    fontSize: 14,
  },
  tiles: { marginTop: 50 },
  tile: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  tileLeft: {
    color: '#fff',
    fontSize: 16,
  },
  tileRight: {
    color: '#fff',
    fontSize: 16,
  },
});
export default Profile;
