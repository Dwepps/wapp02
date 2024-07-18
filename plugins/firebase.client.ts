import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAErN7NtJsrKMJs9J70bWvLCsoj5-_NsMg",
    authDomain: "wapp-2b58a.firebaseapp.com",
    projectId: "wapp-2b58a",
    storageBucket: "wapp-2b58a.appspot.com",
    messagingSenderId: "629461912413",
    appId: "1:629461912413:web:b95c398070f25d2d85b6b4",
    measurementId: "G-J1BPJJJK8N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
})
