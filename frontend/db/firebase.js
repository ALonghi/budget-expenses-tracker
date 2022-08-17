// Firebase App (the core Firebase SDK) is always required and must be listed first
// If you enabled Analytics in your project, add the Firebase SDK for Analytics

import {getApp, getApps, initializeApp} from 'firebase/app';
import {collection, getFirestore} from 'firebase/firestore/lite';
// Required for side-effects
import "firebase/firestore";

// Add the Firebase products that you want to use
import {getAnalytics} from "firebase/analytics";
import "firebase/auth";
import logging from "@utils/logging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};


const initializeFirebase = () => {
  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
    return app
  } catch (e) {
    logging.error(`Tried to create firebase from server ${e.message || e}`)
  }
}

const app = initializeFirebase();
const db = getFirestore(app);

// collection references
const usersCollection = collection(db, "users")
const countersCollection = collection(db, "counters");

// export utils/refs
export {
  initializeFirebase,
  db,
  usersCollection,
  countersCollection,
};
