import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colorpicker } from '../../utilities';

const example = [
  {
    data:
      "Pfizer has made a new development in fighting the pandemic, they've successfully tested a new vaccine with an efficacy of 95%.",
    name: 'Manoj',
    type: 'health',
    id: '0',
  },
  {
    data:
      'Results of the 2020 US election are here and Joe Biden is our new president!',
    name: 'srinivas',
    type: 'social',
    id: '1',
  },
];
const Pen = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M21.2431 12.8318H14.1206C13.3679 12.8316 12.6334 13.063 12.0168 13.4946C11.4001 13.9263 10.9313 14.5372 10.6739 15.2445L3.78056 34.2048C3.53672 34.874 3.70356 35.6238 4.20589 36.128L4.74306 36.6652L16.5167 24.8915C16.5149 24.8438 16.5021 24.7962 16.5021 24.7485C16.5021 24.2046 16.6633 23.6729 16.9655 23.2207C17.2677 22.7684 17.6972 22.416 18.1997 22.2078C18.7022 21.9997 19.2551 21.9452 19.7886 22.0513C20.322 22.1574 20.812 22.4194 21.1966 22.8039C21.5812 23.1885 21.8431 23.6785 21.9492 24.212C22.0553 24.7454 22.0009 25.2984 21.7927 25.8009C21.5846 26.3034 21.2321 26.7329 20.7799 27.035C20.3276 27.3372 19.796 27.4985 19.2521 27.4985C19.2044 27.4985 19.1567 27.4857 19.1091 27.4838L7.33539 39.2575L7.87256 39.7947C8.11905 40.0418 8.43115 40.2132 8.77195 40.2885C9.11275 40.3639 9.46801 40.3401 9.79572 40.22L28.7561 33.3248C29.4633 33.0674 30.0743 32.5986 30.5059 31.982C30.9375 31.3653 31.1689 30.6308 31.1687 29.8782V22.7557L34.8336 19.0927L24.9079 9.16699L21.2431 12.8318Z"
        fill="#FFB30F"
      />
      <Path
        d="M36.5553 16.6118L27.3887 7.44514L31.2753 3.55664L40.442 12.7233L36.5553 16.6118Z"
        fill="#FFB30F"
      />
    </Svg>
  );
};
const Polls = () => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0 20.9434C0 15.9623 0 10.9811 0 6C0 2.71698 2.66038 0 6.0566 0C16.0189 0 25.9811 0 35.9434 0C39.3396 0 42 2.60377 42 6C42 15.9623 42 25.9811 42 35.9434C42 39.3396 39.3962 41.9434 36 41.9434C26.0377 41.9434 16.0189 41.9434 6.0566 41.9434C2.54717 42 0 39.1698 0 35.9434C0 30.9057 0 25.9245 0 20.9434ZM3.50943 21C3.50943 25.9245 3.50943 30.8491 3.50943 35.7736C3.50943 37.4717 4.5283 38.4906 6.16981 38.4906C16.0755 38.4906 25.9245 38.4906 35.8302 38.4906C37.4717 38.4906 38.4906 37.4717 38.4906 35.8302C38.4906 25.9245 38.4906 16.0189 38.4906 6.11321C38.4906 5.66038 38.3774 5.20755 38.2076 4.81132C37.7547 3.84906 36.8491 3.45283 35.7736 3.45283C25.9245 3.45283 16.0189 3.45283 6.16981 3.45283C4.5283 3.50943 3.50943 4.5283 3.50943 6.22641C3.50943 11.1509 3.50943 16.0755 3.50943 21Z"
        fill="#6D7187"
      />
      <Path
        d="M18.2832 20.943C18.2832 17.66 18.2832 14.377 18.2832 11.094C18.2832 10.2449 18.5662 9.96191 19.4153 9.96191C20.4908 9.96191 21.5096 9.96191 22.5851 9.96191C23.3775 9.96191 23.7172 10.3015 23.7172 11.1506C23.7172 13.7544 23.7172 16.4147 23.7172 19.0185C23.7172 22.9808 23.7172 26.9997 23.7172 30.9619C23.7172 31.811 23.4341 32.094 22.5851 32.094C21.5096 32.094 20.4341 32.094 19.4153 32.094C18.6228 32.094 18.2832 31.7544 18.2832 30.9619C18.2832 27.5657 18.2832 24.2827 18.2832 20.943Z"
        fill="#6D7187"
      />
      <Path
        d="M14.7738 23.6039C14.7738 26.0945 14.7738 28.5284 14.7738 31.019C14.7738 31.7548 14.4341 32.0944 13.6983 32.0944C12.5662 32.0944 11.4908 32.0944 10.3587 32.0944C9.62283 32.0944 9.2832 31.7548 9.2832 31.019C9.2832 26.0944 9.2832 21.1699 9.2832 16.2454C9.2832 15.5095 9.62283 15.1699 10.3587 15.1699C11.4908 15.1699 12.6228 15.1699 13.7549 15.1699C14.4341 15.1699 14.7172 15.5095 14.7172 16.1888C14.7738 18.6228 14.7738 21.1133 14.7738 23.6039Z"
        fill="#6D7187"
      />
      <Path
        d="M27.1699 25.9247C27.1699 24.2266 27.1699 22.5851 27.1699 20.887C27.1699 20.0945 27.5095 19.8115 28.2454 19.8115C29.3209 19.8115 30.4529 19.8115 31.5284 19.8115C32.2643 19.8115 32.6039 20.1511 32.6039 20.887C32.6039 24.2266 32.6039 27.6228 32.6039 30.9625C32.6039 31.6983 32.2643 32.0379 31.5284 32.0379C30.4529 32.0379 29.3209 32.0379 28.2454 32.0379C27.5095 32.0379 27.1699 31.6983 27.1699 30.9625C27.1699 29.321 27.1699 27.6228 27.1699 25.9247Z"
        fill="#6D7187"
      />
    </Svg>
  );
};

const ClipBoard = () => {
    return (
      <Svg
        width="20"
        height="20"
        viewBox="0 0 34 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M26.4444 0V4.2H32.1243C33.1594 4.2 34 5.1345 34 6.2853V39.9147C33.9995 40.4676 33.8017 40.9977 33.4501 41.3886C33.0984 41.7796 32.6216 41.9994 32.1243 42H1.87567C1.37836 41.9994 0.90157 41.7796 0.549922 41.3886C0.198275 40.9977 0.000500055 40.4676 0 39.9147V6.2853C0 5.1345 0.840556 4.2 1.87567 4.2H7.55556V0H26.4444ZM7.55556 8.4H3.77778V37.8H30.2222V8.4H26.4444V12.6H7.55556V8.4ZM11.3333 29.4V33.6H7.55556V29.4H11.3333ZM11.3333 23.1V27.3H7.55556V23.1H11.3333ZM11.3333 16.8V21H7.55556V16.8H11.3333ZM22.6667 4.2H11.3333V8.4H22.6667V4.2Z"
          fill="#6D7187"
        />
      </Svg>
    );
  };

const Post = ({ data, name, type }) => {
  const [fillheart, setfillheart] = useState('#6D7187');
  const [fillbookmark, setfillbookmark] = useState('#6D7187');

  return (
    <View style={[styles.outer]}>
      <View style={[styles.left]}>
        <View
          style={[{ backgroundColor: colorpicker(type) }, styles.leftin]}
        ></View>
      </View>
      <View style={styles.right}>
        <View style={[styles.upper]}>
          <View style={[styles.name]}>
            <Text style={[styles.nametext]}>You</Text>
          </View>
          <View style={[styles.data]}>
            <Text style={[styles.datatext]}>{data}</Text>
          </View>
        </View>
        <View style={[styles.lower]}>
          <View style={[styles.icon]}>
            <TouchableOpacity
              onPress={() => {
                if (fillheart == '#6D7187') {
                  setfillheart('#FF729F');
                } else {
                  setfillheart('#6D7187');
                }
              }}
            >
              <Svg width="17" height="17" viewBox="0 0 41 36" fill="none">
                <Path
                  d="M20.1608 6.28975C19.6162 5.51194 19.0717 4.73412 18.4182 3.95631C16.6756 1.73398 14.3884 0.289469 11.6655 0.0672361C7.52676 -0.377229 4.36824 1.40063 1.97213 4.84524C0.556241 7.06757 -0.0972449 9.51213 0.0116694 12.1789C0.120584 14.8457 0.77407 17.1792 2.40778 19.2904C3.60584 20.7349 4.8039 22.1794 6.11087 23.5128C10.2496 27.6241 14.824 31.2909 19.5073 34.8467C20.0519 35.2911 20.2697 35.2911 20.8143 34.8467C22.5569 33.5133 24.1906 32.1799 25.9333 30.8465C29.4185 28.0686 32.686 25.1795 35.7356 21.9572C36.9336 20.6238 38.1317 19.2904 39.003 17.7347C40.9635 13.7345 40.9635 9.73436 38.8941 5.84529C37.0425 2.40068 34.1019 0.289469 30.1809 0.178352C27.2402 0.0672361 24.8441 1.1784 22.7748 3.28961C21.7945 4.06742 21.0321 5.17859 20.1608 6.28975Z"
                  fill={fillheart == '#6D7187' ? 'none' : fillheart}
                />
                <Path
                  d="M18.5225 7.43682L20.0698 9.64696L21.7347 7.52387C21.94 7.262 22.1264 7.01955 22.2994 6.79449C22.9647 5.92919 23.4321 5.32115 24.0179 4.8563L24.1157 4.77873L24.2031 4.6896C25.9367 2.92093 27.8067 2.09007 30.1054 2.17693L30.1148 2.17728L30.1243 2.17755C33.222 2.26534 35.5645 3.87743 37.1305 6.78858C38.8743 10.0683 38.8973 13.3733 37.2314 16.8046C36.4925 18.1079 35.4675 19.2629 34.2653 20.6011C31.3055 23.7264 28.1228 26.5429 24.702 29.2702C23.8242 29.9422 22.9753 30.6127 22.14 31.2725L22.1341 31.2771C21.473 31.7993 20.8203 32.3148 20.1575 32.8282C15.6992 29.4275 11.409 25.9555 7.52992 22.1034C6.30212 20.8497 5.16566 19.4827 3.96982 18.0408C2.66452 16.3424 2.10601 14.4482 2.01 12.0973C1.91809 9.84674 2.45893 7.81757 3.63734 5.95382C5.69178 3.01748 8.18192 1.70463 11.4519 2.0558L11.4773 2.05853L11.5028 2.06061C13.5609 2.22858 15.3718 3.31246 16.8444 5.19042L16.8652 5.21699L16.8869 5.24283C17.4753 5.94323 17.972 6.65061 18.5225 7.43682Z"
                  stroke={fillheart}
                  strokeOpacity="1"
                  strokeWidth="4"
                />
              </Svg>
            </TouchableOpacity>
            <Text
              style={[
                {
                  color: '#6D7187',
                  paddingHorizontal: 4,
                  fontSize: 10,
                  paddingTop: 3,
                },
              ]}
            >
              12k
            </Text>
          </View>
          <View style={[styles.button]}>
            <Text style={[{ fontSize: 9, fontWeight: '500' }]}>
              View Feedbacks
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const NewPost = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#1F2232' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewEle');
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: '#6D7187',
            fontSize: 15,
            margin: 10,
          }}
        >
          Share your voice ...
        </Text>
        <View style={{ height: 70 }}></View>
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Pen /><ClipBoard /><Polls />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const CreatePost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <NewPost navigation={navigation} />
      </View>
      <FlatList
        data={example}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Post name={item.name} data={item.data} type={item.type} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2E42',
    flex: 1,
  },
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
    width: 23,
  },
  right: {
    flex: 6,
    paddingHorizontal: 10,
  },
  upper: {
    flex: 6,
  },
  lower: {
    flex: 1,
    flexDirection: 'row',
  },
  nametext: {
    color: 'white',
    marginBottom: 3,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  datatext: {
    color: 'white',
    paddingRight: 20,
    textAlign: 'justify',
    marginRight: 10,
    fontSize: 13,
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
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#ffb30f',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CreatePost;
