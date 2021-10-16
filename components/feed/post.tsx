import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import { colorpicker } from '../../utilities';
import Svg, { Bookmark, Heart } from '../svgs';
import SubmitFeedbackModal from './SubmitFeedbackModal';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

// const Cross = () => {
//   return (
//     <Svg
//       width="30"
//       height="30"
//       viewBox="0 0 94 94"
//       fill="none"
//     >
//       <Path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M0 47C0 34.5348 4.95177 22.5802 13.766 13.766C22.5802 4.95177 34.5348 0 47 0C59.4652 0 71.4198 4.95177 80.234 13.766C89.0482 22.5802 94 34.5348 94 47C94 59.4652 89.0482 71.4198 80.234 80.234C71.4198 89.0482 59.4652 94 47 94C34.5348 94 22.5802 89.0482 13.766 80.234C4.95177 71.4198 0 59.4652 0 47ZM47 6.74166C36.3228 6.74166 26.083 10.9831 18.5331 18.5331C10.9831 26.083 6.74166 36.3228 6.74166 47C6.74166 57.6772 10.9831 67.917 18.5331 75.4669C26.083 83.0168 36.3228 87.2583 47 87.2583C57.6772 87.2583 67.917 83.0168 75.4669 75.4669C83.0168 67.917 87.2583 57.6772 87.2583 47C87.2583 36.3228 83.0168 26.083 75.4669 18.5331C67.917 10.9831 57.6772 6.74166 47 6.74166ZM63.7051 30.302C64.3703 30.9674 64.744 31.8697 64.744 32.8106C64.744 33.7515 64.3703 34.6538 63.7051 35.3192L52.0172 47L63.7051 58.6808C64.3714 59.3471 64.7457 60.2507 64.7457 61.193C64.7457 62.1352 64.3714 63.0389 63.7051 63.7051C63.0389 64.3714 62.1352 64.7457 61.193 64.7457C60.2507 64.7457 59.3471 64.3714 58.6808 63.7051L47 52.0172L35.3192 63.7051C34.9893 64.035 34.5976 64.2967 34.1666 64.4753C33.7356 64.6538 33.2736 64.7457 32.807 64.7457C32.3405 64.7457 31.8785 64.6538 31.4475 64.4753C31.0164 64.2967 30.6248 64.035 30.2949 63.7051C29.965 63.3752 29.7033 62.9836 29.5247 62.5525C29.3462 62.1215 29.2543 61.6595 29.2543 61.193C29.2543 60.7264 29.3462 60.2644 29.5247 59.8334C29.7033 59.4024 29.965 59.0107 30.2949 58.6808L41.9828 47L30.2949 35.3192C29.6286 34.6529 29.2543 33.7493 29.2543 32.807C29.2543 31.8648 29.6286 30.9611 30.2949 30.2949C30.9611 29.6286 31.8648 29.2543 32.807 29.2543C33.7493 29.2543 34.6529 29.6286 35.3192 30.2949L47 41.9828L58.6808 30.2949C59.0104 29.9644 59.402 29.7023 59.833 29.5234C60.2641 29.3445 60.7262 29.2525 61.193 29.2525C61.6597 29.2525 62.1218 29.3445 62.5529 29.5234C62.984 29.7023 63.3755 29.9644 63.7051 30.2949V30.302Z"
//         fill="white"
//       />
//     </Svg>
//   );
// };

const Post = ({ data, name, type }) => {
  const [fillheart, setfillheart] = useState('#6D7187');
  const [fillbookmark, setfillbookmark] = useState('#6D7187');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.outer]}>
      {/* <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: '#1f2232' }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Svg type="Cross" />
          </TouchableHighlight>
          <View style={styles.modalView}>
            <TextInput
              style={{
                color: '#6D7187',
                fontSize: 15,
                fontFamily: 'Poppins-Regular',
                flex: 1,
                width: screenWidth * 0.85,
              }}
              placeholder={'Share you feedback'}
              placeholderTextColor="#6D7187"
            />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2A2E42' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{
                backgroundColor: '#FFB30F',
                width: 100,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal> */}
      <SubmitFeedbackModal
        visible={modalVisible}
        setVisible={setModalVisible}
      />
      <View style={[styles.left]}>
        <View
          style={[{ backgroundColor: colorpicker(type) }, styles.leftin]}
        ></View>
      </View>
      <View style={styles.right}>
        <View style={[styles.upper]}>
          <View style={[styles.name]}>
            <Text style={[styles.nametext]}>{name}</Text>
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
              <Heart fillheart={fillheart} />
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
            <TouchableOpacity
              onPress={() => {
                if (fillbookmark == '#6D7187') {
                  setfillbookmark('#5762D5');
                } else {
                  setfillbookmark('#6D7187');
                }
              }}
            >
              <Bookmark fillbookmark={fillbookmark} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={[{ fontSize: 14, fontWeight: '500' }]}>
              Submit Feedback
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  name: {},
  nametext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  data: {},
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
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#ffb30f',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: screenHeight * 0.3,
    width: screenWidth * 0.9,
    margin: 20,
    backgroundColor: '#2A2E42',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',

    borderColor: '#1f2232',
    borderWidth: 2,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Post;
