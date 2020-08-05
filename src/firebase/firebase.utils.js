import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSN166_02wNyZIZoLnCwp_P5Njem5GyPQ",
  authDomain: "clothing-dda14.firebaseapp.com",
  databaseURL: "https://clothing-dda14.firebaseio.com",
  projectId: "clothing-dda14",
  storageBucket: "clothing-dda14.appspot.com",
  messagingSenderId: "810632975792",
  appId: "1:810632975792:web:b15c47e207db11ebc7f275",
};
/* initialize with project config */
firebase.initializeApp(firebaseConfig);

/* auth and store for same app config*/
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Show sign-in provider */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
/* register kind of sign-in method */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
