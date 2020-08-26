import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAc400eW1ERuSwDTUO-DAhFza93Ax8fW5s",
    authDomain: "comm-app-1adc7.firebaseapp.com",
    databaseURL: "https://comm-app-1adc7.firebaseio.com",
    projectId: "comm-app-1adc7",
    storageBucket: "comm-app-1adc7.appspot.com",
    messagingSenderId: "981322472228",
    appId: "1:981322472228:web:3cee069f32a8e7f0f831b1",
    measurementId: "G-EV3VG203Q3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db; /* specific export for db as used in numerous places */
