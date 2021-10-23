import firebase from 'firebase';
import { firestore } from '../firebase';

export const storeUser = async (user: any) => {
  const response = await firestore.collection('users').doc(user.uid).set(user);
  return response;
};

export const getUser = async (userId: string) => {
  return (await firestore.collection('users').doc(userId).get()).data();
};

export const createPost = async (post: object) => {
  const response = await firestore.collection('posts').add(post);
  return response;
};

export const getPost = async (postId: string) => {
  return (await firestore.collection('posts').doc(postId).get()).data();
};

export const getAllPosts = async () => {
  let data = [];
  return await firestore
    .collection('posts')
    .orderBy('timeStamp', 'desc')
    .get()
    .then((snap) => {
      console.log('snap', snap.docs);
      snap.forEach((x) => {
        console.log('x', x.data());
        let y = x.data();
        y.id = x.id;
        data.push(y);
      });
      return data;
    });
};

export const likePost = async (postId: string, userId: string) => {
  return await firestore
    .collection('posts')
    .doc(postId)
    .update({ likedBy: firebase.firestore.FieldValue.arrayUnion(userId) });
};

export const unlikePost = async (postId: string, userId: string) => {
  return await firestore
    .collection('posts')
    .doc(postId)
    .update({ likedBy: firebase.firestore.FieldValue.arrayRemove(userId) });
};
