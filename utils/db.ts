import { firestore } from '../firebase';

export const storeUser = async (user: any) => {
  const response = await firestore.collection('users').doc(user.uid).set(user);
  return response;
};

export const getUser = async (userId: string) => {
  return (await firestore.collection('users').doc(userId).get()).data();
};
