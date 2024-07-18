import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyD4CtHdJ_-F8q0aCD9Nr3iJd0uNBjs1lwA",
    authDomain: "wapp-002.firebaseapp.com",
    projectId: "wapp-002",
    storageBucket: "wapp-002.appspot.com",
    messagingSenderId: "85739114713",
    appId: "1:85739114713:web:eadcaf53d822560ebfaec8",
    measurementId: "G-MR6WSNXD34"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
})
