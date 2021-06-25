import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: 'AIzaSyASFxIfzTWsSCczByYsFHvu1fZg744992k',
  authDomain: 'lookout-b4bd7.firebaseapp.com',
  databaseURL: 'https://lookout-b4bd7.firebaseio.com',
  projectId: 'lookout-b4bd7',
  storageBucket: 'lookout-b4bd7.appspot.com',
  messagingSenderId: '500571869292',
  appId: '1:500571869292:web:bfb64b00c332036cb10849',
  measurementId: 'G-HXYMKWNEVJ',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// firestore.settings({ timestampsInSnapshots: true });
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
