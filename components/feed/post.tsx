import React, { useContext, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colorpicker } from '../../utilities';
import { UserContext } from '../../utils/context';
import { likePost, unlikePost } from '../../utils/db';
import { Bookmark, Heart } from '../svgs';
import SubmitFeedbackModal from './SubmitFeedbackModal';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Post = ({ id, data, name, type, likes, likedBy }) => {
  const { user } = useContext(UserContext);
  const [fillheart, setfillheart] = useState('#6D7187');
  const [fillbookmark, setfillbookmark] = useState('#6D7187');
  const [modalVisible, setModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(likedBy.includes(user.uid));

  const handleLike = async () => {
    if (isLiked) {
      setIsLiked(false);
      await unlikePost(id, user.uid);
    } else {
      setIsLiked(true);
      await likePost(id, user.uid);
    }
  };

  return (
    <View style={[styles.outer]}>
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
            <TouchableOpacity onPress={handleLike}>
              <Heart fillheart={isLiked ? '#FF729F' : '#6D7187'} />
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
              {likes}
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
