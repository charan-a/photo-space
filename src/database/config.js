import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAKNBkKXIHfeW5tmD-_yQGFK_28GxSZXO0",
    authDomain: "photospace-764a4.firebaseapp.com",
    databaseURL: "https://photospace-764a4-default-rtdb.firebaseio.com",
    projectId: "photospace-764a4",
    storageBucket: "photospace-764a4.appspot.com",
    messagingSenderId: "606137701616",
    appId: "1:606137701616:web:56d6b3c09dce8ada99de35",
    measurementId: "G-VGKJCVJHDK"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database()

  export {database}