// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiwkpXHwBbOZkj9g5xg1KvergYVTWjsCk",
  authDomain: "actify-bc56f.firebaseapp.com",
  projectId: "actify-bc56f",
  storageBucket: "actify-bc56f.firebasestorage.app",
  messagingSenderId: "499196408476",
  appId: "1:499196408476:web:32c54db223749c84adf359",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
