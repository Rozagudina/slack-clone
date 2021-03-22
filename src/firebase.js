
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyA-ZJNQ4BHf8V5hEYEm-P43EhFxZ5WE9jQ",
	authDomain: "slack-clone-c0e3e.firebaseapp.com",
	projectId: "slack-clone-c0e3e",
	storageBucket: "slack-clone-c0e3e.appspot.com",
	messagingSenderId: "42890834122",
	appId: "1:42890834122:web:c7059c83744a8e345e4433",
	measurementId: "G-FB3RW9DG16",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export{db,auth,provider}