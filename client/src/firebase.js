// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-blog-d6175.firebaseapp.com",
//   projectId: "mern-blog-d6175",
//   storageBucket: "mern-blog-d6175.firebasestorage.app",
//   messagingSenderId: "278111125329",
//   appId: "1:278111125329:web:17efb31b42d02dd31a1d70"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-wexa.firebaseapp.com",
  projectId: "mern-wexa",
  //storageBucket: "mern-wexa.firebasestorage.app",
  storageBucket: "mern-wexa.appspot.com",
  messagingSenderId: "1031530178907",
  appId: "1:1031530178907:web:d9d30554de7e716f4bd27e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);