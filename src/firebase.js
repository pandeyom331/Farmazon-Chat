// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBe9QqopY61G3_Xho6e-JYZczDSNx2ffOQ",
    authDomain: "farmazon-chat.firebaseapp.com",
    projectId: "farmazon-chat",
    storageBucket: "farmazon-chat.appspot.com",
    messagingSenderId: "791055344137",
    appId: "1:791055344137:web:bcf46cf83215a6318a4ed8",
    measurementId: "G-FG56073GQY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
var provider1 = new firebase.auth.FacebookAuthProvider();

export {auth, provider, provider1};
export default db;