import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBuUXIAzu95QS6LJ0-DJqSPm_oyB8wloTI",
  authDomain: "bookmydoctorr.firebaseapp.com",
  projectId: "bookmydoctorr",
  storageBucket: "bookmydoctorr.appspot.com",
  messagingSenderId: "6129221968",
  appId: "1:6129221968:web:0e78f96e0db452b7a82c55"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)