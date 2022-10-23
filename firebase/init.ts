import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC0mXnSJtQJLppmpAO594mSBgaRMP_UTTw",
    authDomain: "vanderbilt-acorns.firebaseapp.com",
    projectId: "vanderbilt-acorns",
    storageBucket: "vanderbilt-acorns.appspot.com",
    messagingSenderId: "944883469371",
    appId: "1:944883469371:web:22b9ea7b383510de4ba01e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
