import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Toast from 'react-native-toast-message';
import { colorpicker } from '../../utilities';
import { UserContext } from '../../utils/context';
import { getUser, interactWithSurvey, updateUser } from '../../utils/db';
import Poll from '../feed/pollComponent';
import LoadingModal from '../LoadingModal';
const Surveyitem = ({
  type,
  username,
  id,
  data,
  topic,
  options,
  interactions,
}) => {
  const { user, setUser } = useContext(UserContext);
  const [buttoncolor, setbuttoncolor] = useState('#6D7187');
  const [selectedValue, setSelectedValue] = useState([0, 0, 0, 0, 0]);
  const [interacted, setIntearacted] = useState(false);

  useEffect(() => {
    const index = Object.keys(interactions).findIndex(
      (item) => item === user.uid
    );
    setIntearacted(index !== -1);
    if (index !== -1) {
      setSelectedValue((prev) => {
        prev[index] = 1;
        return prev;
      });
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const handleOnPress = async () => {
    try {
      if (!interacted && selectedValue.indexOf(1) !== -1) {
        setLoading(true);
        setIntearacted(true);
        const _interactions = { ...interactions };
        _interactions[user.uid] = selectedValue.indexOf(1);
        await interactWithSurvey(id, { interactions: _interactions });
        const response = await updateUser(
          {
            credibility: user.credibility + 5,
            credsFromFeed: user.credsFromFeed + 5,
            weeklyCreds: user.weeklyCreds + 5,
          },
          user.uid
        );
        setUser({ ...user, ...response });
        setLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Interacted with survey',
          text2:
            response && response.noCredits
              ? response.noCredits
              : 'You have received 5 credits',
        });
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err && err.message ? err.message : 'Something went wrong!',
      });
    }
  };

  return (
    <View style={[styles.outer]}>
      <LoadingModal visible={loading} text="Interacting..." />
      <View style={[styles.left]}>
        <View
          style={[{ backgroundColor: colorpicker(topic) }, styles.leftin]}
        ></View>
      </View>
      <View style={styles.center}>
        <View style={styles.upper}>
          <Text style={styles.nametext}>{username}</Text>
          <Text style={styles.datatext}>{data}</Text>
        </View>
        <View style={styles.lower}>
          <Poll
            interacted={interacted}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setbuttoncolor={setbuttoncolor}
            list={options}
          />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <View style={styles.right}>
          <Svg width="22" height="22" viewBox="0 0 82 72" fill="none">
            <Path
              d="M36 0C55.7206 0 72 16.1471 72 35.8676C72 55.7206 55.7206 72 36 72C16.1471 72 0 55.8529 0 36C0 16.0147 16.1471 0 36 0ZM69.0882 36C69.0882 17.7353 54.2647 2.91177 36 2.77942C17.7353 2.77942 2.77942 17.7353 2.77942 36C2.91177 54.6618 18 69.0882 36 69.0882C54.2647 69.0882 69.0882 54.2647 69.0882 36Z"
              fill={buttoncolor}
            />
            <Path
              d="M47.5151 38.7794C37.3239 38.7794 27.1328 38.7794 16.9416 38.7794C14.8239 38.7794 13.6328 37.5882 13.6328 35.6029C13.7651 33.75 15.618 32.8235 17.2063 33.0882C27.3975 33.0882 37.721 33.0882 47.9122 33.0882C47.9122 32.9558 47.9122 32.9558 48.0445 32.8235C45.7945 30.9705 43.5445 28.9852 41.1622 27.1323C39.8386 26.0735 39.5739 24.3529 40.5004 23.1617C41.5592 21.8382 43.2798 21.5735 44.6033 22.7647C48.8386 26.3382 52.9416 29.7794 57.0445 33.3529C58.7651 34.8088 58.7651 36.6617 57.0445 38.1176C52.9416 41.6911 48.8386 45.1323 44.7357 48.7058C41.6916 51.6176 37.8533 47.2499 40.7651 44.6029C43.0151 42.7499 45.1328 40.7647 47.3828 38.9117C47.5151 38.9117 47.5151 38.9117 47.5151 38.7794Z"
              fill={buttoncolor}
            />
          </Svg>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    paddingVertical: 20,
    flex: 3.5,
    backgroundColor: '#2A2E42',
    flexDirection: 'row',
    marginTop: 10,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftin: {
    flex: 1,
    marginLeft: 10,
    width: 15,
    borderRadius: 10,
  },
  nametext: {
    color: '#fff',
    marginBottom: 3,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  right: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  center: {
    flex: 6,
    paddingHorizontal: 10,
  },
  upper: {
    flex: 6,
  },
  lower: {
    flex: 5,
    flexDirection: 'row',
    marginVertical: 10,
  },
  name: {},
  data: {},
  datatext: {
    color: 'white',
    paddingRight: 20,
    textAlign: 'justify',
    marginRight: 10,
    fontSize: 13,
    marginTop: 5,
    lineHeight: 14.5,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginTop: 6,
    flexDirection: 'row',
    textAlign: 'justify',
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Surveyitem;
