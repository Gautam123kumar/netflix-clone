import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArdNd4tRj1WbW75sB9Vo-URvtga_sPotQ",
    authDomain: "netflix-clone-youtub.firebaseapp.com",
    projectId: "netflix-clone-youtub",
    storageBucket: "netflix-clone-youtub.appspot.com",
    messagingSenderId: "639603726186",
    appId: "1:639603726186:web:fa0c94bd1d38a3cd48b713"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};

  export default db;