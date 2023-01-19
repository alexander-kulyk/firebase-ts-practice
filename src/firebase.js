// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBSR8hjXFJ2Tni51V6VZhJ2ScNuqCDvOk0',
  authDomain: 'phonebook-d4948.firebaseapp.com',
  projectId: 'phonebook-d4948',
  storageBucket: 'phonebook-d4948.appspot.com',
  messagingSenderId: '165562013114',
  appId: '1:165562013114:web:417449527c42d6a20f3983',
  measurementId: 'G-Q6K2BW3FHT',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getDatabase(app);
export const dbRef = ref(getDatabase());
export const storageFB = getStorage(app);
