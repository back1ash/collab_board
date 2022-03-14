// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase';
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0rZrrmfRi_zKNhIcknrpiGVJLwb_sC28',
  authDomain: 'collabboard-53561.firebaseapp.com',
  databaseURL: 'https://collabboard-53561-default-rtdb.firebaseio.com',
  projectId: 'collabboard-53561',
  storageBucket: 'collabboard-53561.appspot.com',
  messagingSenderId: '475458394544',
  appId: '1:475458394544:web:3d5b6d97f9c5b4a62b9e75',
  measurementId: 'G-YYW9SYJR14',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();

var firebaseui = require('firebaseui');
//FirebaseUI Initialize
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// Google Auth 인증을 위해 라이브러리를 불러옴.
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth();
const google_login_popup = signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
});

export default firebase;
