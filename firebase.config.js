import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Singleton: If there is an app already created, get app. Else, establish a new connection to firebase (Initialize Firebase). Prevents multiple connections.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// For communication with firestore
export const db = getFirestore(app);

export const storage = getStorage(app);

// Connect to Firebase auth
export const auth = getAuth(app);