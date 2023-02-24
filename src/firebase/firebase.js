import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLGDAB6Ro3nqKBGx0rNVAKvdX2-619M14",
  authDomain: "impressive-course.firebaseapp.com",
  projectId: "impressive-course",
  storageBucket: "impressive-course.appspot.com",
  messagingSenderId: "193640003929",
  appId: "1:193640003929:web:67fc9ca0d3b451308fb448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app