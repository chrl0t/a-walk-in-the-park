import firebase from 'firebase'
const firebaseui = require('firebaseui');

const firebaseConfig = {
    apiKey: "AIzaSyDXdozot24PgJ05qth7stWp6NdcrJqHo4Y",
    authDomain: "a-walk-in-the-park-89cc0.firebaseapp.com",
    projectId: "a-walk-in-the-park-89cc0",
    storageBucket: "a-walk-in-the-park-89cc0.appspot.com",
    messagingSenderId: "185033358747",
    appId: "1:185033358747:web:903c7e5c778149412a353e",
    measurementId: "G-8BKQV908L3",
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
firebase.analytics();

export const db = firebase.firestore()




// const uiConfig = ({
//   signInSuccessUrl: "/",
//   signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
//   tosUrl: '/terms-of-service' 
// })


// const ui = new firebaseui.auth.AuthUI(firebase.auth())

// export const startFirebaseUI = function (elementId) {
//   ui.start(elementId, uiConfig)
// }
