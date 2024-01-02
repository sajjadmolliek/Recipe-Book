// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL0-qvdoXyEbVqaIQPEm2YBuObzPRUgKI",
  authDomain: "recipe-book-c4a3d.firebaseapp.com",
  projectId: "recipe-book-c4a3d",
  storageBucket: "recipe-book-c4a3d.appspot.com",
  messagingSenderId: "266615775810",
  appId: "1:266615775810:web:f34c5c7d20dbef8cff43db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;


