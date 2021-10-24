import React, { useContext, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../theme';
import { colorpicker } from '../../utilities';
import { UserContext } from '../../utils/context';
import {
  getUser,
  likePost,
  savePost,
  unlikePost,
  unsavePost,
} from '../../utils/db';
import { Bookmark, Heart } from '../svgs';
import SubmitFeedbackModal from './SubmitFeedbackModal';

const Post = ({ id, data, name, type, likes, likedBy }) => {
  const { user, setUser } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(likedBy.indexOf(user.uid) !== -1);
  const [_likes, _setLikes] = useState(likes);
  console.log(
    'index',
    user.savedPosts.findIndex((item) => item.id === id)
  );
  const [isSaved, setIsSaved] = useState(
    user.savedPosts.findIndex((item) => item.id === id) !== -1
  );

  const handleLike = async () => {
    let __likes = _likes;
    if (isLiked) {
      _setLikes((prev) => prev - 1);
      setIsLiked(false);
      await unlikePost(id, user.uid, __likes - 1);
    } else {
      _setLikes((prev) => prev + 1);
      setIsLiked(true);
      console.log('liking');
      await likePost(id, user.uid, __likes + 1);
    }
  };

  const handleSavePost = async () => {
    const payload = {
      id,
      data,
      name,
      type,
      likes,
      likedBy,
    };
    if (isSaved) {
      setIsSaved(false);

      await unsavePost(payload, user.uid);
      const _user = await getUser(user.uid);
      setUser(_user);
    } else {
      setIsSaved(true);
      await savePost(payload, user.uid);
      const _user = await getUser(user.uid);
      setUser(_user);
    }
  };

  return (
    <>
      <SubmitFeedbackModal
        visible={modalVisible}
        setVisible={setModalVisible}
      />
      <View style={[styles.outer]}>
        <View style={styles.left}>
          <View
            style={[{ backgroundColor: colorpicker(type) }, styles.leftin]}
          />
          <View style={styles.middleContainer}>
            <Text style={[styles.nametext]}>{name}</Text>
            <Text style={[styles.datatext]}>{data}</Text>
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
                    marginRight: 10,
                  },
                ]}
              >
                {_likes}
              </Text>
              <TouchableOpacity onPress={handleSavePost}>
                <Bookmark fillbookmark={isSaved ? '#5762D5' : '#6D7187'} />
              </TouchableOpacity>
            </View>
          </View>
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
    </>
  );
};
const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#2A2E42',
    width: theme.width,
    marginVertical: 10,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleContainer: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  leftin: {
    width: 15,
    minHeight: theme.height * 0.075,
    borderRadius: 10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nametext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  datatext: {
    color: 'white',
    paddingRight: 20,
    textAlign: 'justify',
    marginRight: 10,
    fontSize: 13,
    lineHeight: 14.5,
    marginVertical: 5,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 40,
    backgroundColor: '#ffb30f',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
export default Post;
