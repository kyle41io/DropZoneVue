import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyALt2cp3CzRWkL3RnESupJHtsCpQoibR-A",
  authDomain: "vue-file-upload-kyle.firebaseapp.com",
  projectId: "vue-file-upload-kyle",
  storageBucket: "vue-file-upload-kyle.appspot.com",
  messagingSenderId: "516610790791",
  appId: "1:516610790791:web:578bef2721dc4d8611af22",
});

const storage = getStorage(app);
export default storage;
