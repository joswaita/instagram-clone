// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCicokNE5amtO2sRWkTG-kaN-mQTw7g52I",
    authDomain: "instagram-clone-react-3ae9a.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-3ae9a-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-3ae9a",
    storageBucket: "instagram-clone-react-3ae9a.appspot.com",
    messagingSenderId: "360076916027",
    appId: "1:360076916027:web:7fb35118e55c71ccfef31e",
    measurementId: "G-0FMVN5ZY9Z"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage }

  // export default db