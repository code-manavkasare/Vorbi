import firebase from 'firebase';
import { firestore } from '../firebase';

export const storeUser = async (user: any) => {
  const response = await firestore.collection('users').doc(user.uid).set(user);
  return response;
};

export const getUser = async (userId: string) => {
  return (await firestore.collection('users').doc(userId).get()).data();
};

export const updateUser = async (user: object, userId: string) => {
  return await firestore.collection('users').doc(userId).update(user);
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
      snap.forEach((x) => {
        console.log('x', x.data());
        let y = x.data();
        y.id = x.id;
        data.push(y);
      });
      return data;
    });
};

export const likePost = async (
  postId: string,
  userId: string,
  likes: number
) => {
  return await firestore
    .collection('posts')
    .doc(postId)
    .update({
      likes,
      likedBy: firebase.firestore.FieldValue.arrayUnion(userId),
    });
};

export const unlikePost = async (
  postId: string,
  userId: string,
  likes: number
) => {
  return await firestore
    .collection('posts')
    .doc(postId)
    .update({
      likes,
      likedBy: firebase.firestore.FieldValue.arrayRemove(userId),
    });
};

export const createSurvey = async (post: object) => {
  const response = await firestore.collection('surveys').add(post);
  return response;
};

export const getSurvey = async (postId: string) => {
  return (await firestore.collection('surveys').doc(postId).get()).data();
};

export const getAllSurveys = async () => {
  let data = [];
  return await firestore
    .collection('surveys')
    .orderBy('timeStamp', 'desc')
    .get()
    .then((snap) => {
      snap.forEach((x) => {
        console.log('x', x.data());
        let y = x.data();
        y.id = x.id;
        data.push(y);
      });
      return data;
    });
};

export const savePost = async (post: object, userId: string) => {
  return await firestore
    .collection('users')
    .doc(userId)
    .update({
      savedPosts: firebase.firestore.FieldValue.arrayUnion(post),
    });
};

export const unsavePost = async (post: object, userId: string) => {
  return await firestore
    .collection('users')
    .doc(userId)
    .update({
      savedPosts: firebase.firestore.FieldValue.arrayRemove(post),
    });
};

export const createFeedback = async (feedback: object) => {
  const response = await firestore.collection('feedbacks').add(feedback);
  return response;
};

export const getFeedback = async (feedbackId: string) => {
  return (await firestore.collection('feedbacks').doc(feedbackId).get()).data();
};

export const getFeedbacksForUser = async (userId: string) => {
  let data = [];
  return await firestore
    .collection('feedbacks')
    .where('userId', '==', userId)
    .get()
    .then((snap) => {
      snap.forEach((x) => {
        console.log('x', x.data());
        let y = x.data();
        y.id = x.id;
        data.push(y);
      });
      return data;
    });
};
