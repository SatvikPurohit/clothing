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

/* DB */
export const firestore = firebase.firestore();

/* 
   auth and store for same app config
   Show sign-in provider 
   register kind of sign-in method 


   on sign-in create copy of firebase auth into firebase store for our app
   also, this can be used with sign up
 */
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const currentUserProfileDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  // check if it already exists
  //  set ref to users doc
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, refreshToken, photoURL, displayName, uid } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        refreshToken,
        photoURL,
        email,
        displayName,
        uid,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export default firebase;
