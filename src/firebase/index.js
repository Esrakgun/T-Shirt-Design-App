



import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDCUgDPVoGSesOM0ScHa4xIOagyCNidqvs",
  authDomain: "tshirtapp-cf82d.firebaseapp.com",
  databaseURL: "https://tshirtapp-cf82d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tshirtapp-cf82d",
  storageBucket: "tshirtapp-cf82d.firebasestorage.app",
  messagingSenderId: "1049899694330",
  appId: "1:1049899694330:web:184d2f85c8024b21a7b143",
  measurementId: "G-NWFFLD3RXZ"
};


const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage};
