import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAU-F1EpYqrNRVPQH2awE31-EmndIAQ7Tk",
    authDomain: "greed-island-88bcc.firebaseapp.com",
    projectId: "greed-island-88bcc",
    storageBucket: "greed-island-88bcc.appspot.com",
    messagingSenderId: "1056392117372",
    appId: "1:1056392117372:web:f87e9a7de6d160da955df9"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => {
    auth.useDeviceLanguage();
    signInWithPopup(auth, googleProvider);
};

auth.useDeviceLanguage();

