import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Svg, { Line, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { UserContext } from '../../utils/context';
import { completeMainFeedSurvey, getUser, updateUser } from '../../utils/db';

const Question = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    handleUpdate();
  }, []);

  const handleUpdate = async () => {
    const response = await updateUser(
      { credibility: user.credibility + 5, weeklyCreds: user.weeklyCreds + 5 },
      user.uid
    );
    setUser({ ...user, ...response });
  };

  return (
    <View style={[styles.questionbox]}>
      <Text
        style={{ color: 'white', fontSize: 30, fontFamily: 'Poppins-Regular' }}
      >
        WOOHOO!
      </Text>
      <Text
        style={{
          color: '#6D7187',
          fontSize: 30,
          fontFamily: 'Poppins-Regular',
          marginBottom: 10,
        }}
      >
        Survey Completed
      </Text>
      <Text
        style={{
          color: '#6D7187',
          fontSize: 15,
          fontFamily: 'Poppins-Regular',
          marginBottom: 10,
        }}
      >
        You have Earned
      </Text>
      <Text
        style={{
          color: '#09BC8A',
          fontSize: 15,
          fontFamily: 'Poppins-Regular',
        }}
      >
        +5 Credibility
      </Text>
    </View>
  );
};
const Star = () => {
  return (
    <Svg
      width="50"
      height="50"
      viewBox="0 0 214 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M213.776 80.1257C214 83.7067 212.432 86.1687 209.967 88.6306C196.073 102.06 182.18 115.488 168.287 128.917C167.167 130.036 166.718 131.155 167.167 132.722C169.856 147.494 172.321 162.266 174.785 177.037C175.458 181.29 176.13 185.542 177.026 189.795C177.923 194.271 176.578 198.076 172.993 200.762C169.183 203.671 165.15 204.119 160.892 201.657C153.273 197.628 145.879 193.824 138.26 189.795C128.4 184.647 118.54 179.499 108.905 174.352C107.56 173.68 106.664 173.68 105.32 174.352C87.841 183.528 70.5865 192.481 53.108 201.657C46.3855 205.238 38.0944 201.209 36.974 193.824C36.5258 190.914 37.1981 187.781 37.6462 184.871C40.3352 168.309 43.2483 151.746 46.3855 135.184C47.0578 131.379 46.1614 129.141 43.4724 126.679C30.0274 114.146 16.8064 101.164 3.5855 88.4068C0.224245 85.0496 -0.896174 81.2447 0.672412 76.7684C2.01691 72.2922 5.37817 69.8302 9.85985 69.1588C29.1311 66.2492 48.6263 63.5634 67.8975 60.8776C69.4661 60.6538 70.1384 59.9823 71.0347 58.6395C79.5499 41.4057 88.0651 24.172 96.8043 6.93824C100.166 0.2238 107.56 -2.01435 113.611 2.23813C115.403 3.35721 116.748 5.37154 117.644 7.38587C125.935 24.172 134.45 41.1819 142.742 58.1918C143.638 59.9823 144.758 60.6538 146.551 60.8776C159.548 62.6681 172.321 64.6825 185.317 66.473C191.368 67.3682 197.418 68.2635 203.692 69.1588C207.95 69.8302 211.087 71.6207 212.88 75.6494C213.328 76.9923 213.552 78.559 213.776 80.1257Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0.00016082"
          y1="101.54"
          x2="213.892"
          y2="101.54"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.0251397" stop-color="#FCB216" />
          <Stop offset="0.5233" stop-color="#F3903F" />
          <Stop offset="0.9721" stop-color="#FCB216" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

const ProgressBar = () => {
  const window = Dimensions.get('window').width;
  const screen = Dimensions.get('screen').width;
  return (
    <View>
      <Svg width={screen} height="70" viewBox={`0 0 ${screen} 70`}>
        <Line
          x1="0"
          y1="12.5"
          x2={screen}
          y2="12.5"
          stroke="#2A2E42"
          strokeWidth="25"
          strokeLinecap="round"
        />
        <Line
          x1="0"
          y1="12.5"
          x2={1 * screen}
          y2="12.5"
          stroke="#414765"
          strokeWidth="25"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

const FinalPageItem = ({ navigation, route }) => {
  const { surveyId, handleSetDone } = route.params;

  useEffect(() => {
    handleComplete();
  }, []);

  const handleComplete = async () => {
    handleSetDone(true);
    await completeMainFeedSurvey(surveyId);
  };

  return (
    <SafeAreaView style={[styles.outer]}>
      <ProgressBar />
      <View style={{ alignItems: 'center' }}>
        <Star />
      </View>
      <Question />
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          paddingHorizontal: 40,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text
            style={{
              color: '#6D7187',
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default FinalPageItem;

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#1f2232',
    flex: 1,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#ffb30f',
  },
  questionbox: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  optionstyle: {
    backgroundColor: '#2A2E42',
    height: 50,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
