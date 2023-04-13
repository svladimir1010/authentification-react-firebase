import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app


// import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
//
// const config = {
//   apiKey: process.env.GATSBY_FIREBASE_API_KEY,
//   authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
//   projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
// };
//
// class Firebase {
//   constructor() {
//     firebase.initializeApp(config);
//     this.auth = firebase.auth();
//     this.uiConfig = {
//       signinOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       ],
//     };
//   }
// }
// export default Firebase;
//
// const FirebaseContext = React.createContext(null);
// export { FirebaseContext };