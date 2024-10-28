// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ_zDnxhCjYQ6l0DqUNA5S1CxXS1zDV5o",
  authDomain: "shop-js-39-fdd7e.firebaseapp.com",
  projectId: "shop-js-39-fdd7e",
  storageBucket: "shop-js-39-fdd7e.appspot.com",
  messagingSenderId: "99848711776",
  appId: "1:99848711776:web:90375a78268486b4359d05",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
