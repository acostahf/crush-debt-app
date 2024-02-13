// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBD6foBmEp5w3xtGBBn_GIRn63c0Irban4",
	authDomain: "crush-debt-app.firebaseapp.com",
	projectId: "crush-debt-app",
	storageBucket: "crush-debt-app.appspot.com",
	messagingSenderId: "818447255047",
	appId: "1:818447255047:web:8f77bb8fef2c2aa10c8ca2",
	measurementId: "G-KPRFLMBBQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
