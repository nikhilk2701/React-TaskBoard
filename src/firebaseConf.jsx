// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTMcQ2ybzv23-inS6XyxeYIZGkLalqPRg",
  authDomain: "taskboard2701.firebaseapp.com",
  projectId: "taskboard2701",
  storageBucket: "taskboard2701.firebasestorage.app",
  messagingSenderId: "746933288568",
  appId: "1:746933288568:web:62d15bbe637819c17bf78d",
  measurementId: "G-EPLBF9ZC6G",
};

// Initialize Firebase
export const config = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(config);
