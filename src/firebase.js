import firebase from 'firebase'
import firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyDXdozot24PgJ05qth7stWp6NdcrJqHo4Y",
    authDomain: "a-walk-in-the-park-89cc0.firebaseapp.com",
    projectId: "a-walk-in-the-park-89cc0",
    storageBucket: "a-walk-in-the-park-89cc0.appspot.com",
    messagingSenderId: "185033358747",
    appId: "1:185033358747:web:903c7e5c778149412a353e",
    measurementId: "G-8BKQV908L3"
  };

  
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
const ui = new firebaseui.auth.AuthUI(firebase.auth())

export default db