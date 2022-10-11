import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyA9eTGEXnPxEZgiIWegENtquX1PFOJreFY",
  authDomain: "react-wait-for-it.firebaseapp.com",
  projectId: "react-wait-for-it",
  storageBucket: "react-wait-for-it.appspot.com",
  messagingSenderId: "201182630568",
  appId: "1:201182630568:web:833bb48e055f9f1640a89d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);