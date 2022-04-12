// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,  onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"; //for everything related to firebase authentication
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRyypyICTQEAbmTN-uASPgN8qDH7Zl5DY",
  authDomain: "ultron-demo-c5edd.firebaseapp.com",
  projectId: "ultron-demo-c5edd",
  storageBucket: "ultron-demo-c5edd.appspot.com",
  messagingSenderId: "770979209884",
  appId: "1:770979209884:web:343aae26cd03ff8235c359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
    
export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password); //registers a user with email id and password
}
export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password); //registers a user with email id and password
}

export function logout(){
    return signOut(auth);
}
//custom react hook

export function useAuth() {
    const [currentUser, setCurrentUser] = useState(); //to store current user

    useEffect(()=>{
       const unsub = onAuthStateChanged(auth, (user)=>{setCurrentUser(user)}) //get user
       return unsub;
    }, [])
    return currentUser;
}
