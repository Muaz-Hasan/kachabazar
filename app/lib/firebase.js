import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_KACHABAZAR_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_KACHABAZAR_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_KACHABAZAR_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_KACHABAZAR_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_KACHABAZAR_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_KACHABAZAR_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_KACHABAZAR_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and other services conditionally
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const db = getFirestore(app);

export { analytics };
