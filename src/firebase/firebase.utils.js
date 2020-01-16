import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDH7dLWJEdMPVQVgA9II6dNc_pwtbJRuyY",
    authDomain: "zemerman-db.firebaseapp.com",
    databaseURL: "https://zemerman-db.firebaseio.com",
    projectId: "zemerman-db",
    storageBucket: "zemerman-db.appspot.com",
    messagingSenderId: "764824940253",
    appId: "1:764824940253:web:ad46c51e4b45acd5973534",
    measurementId: "G-TLPN4RLGVE"
};

export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if (!userAuth) return;
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();

    if (!snapShot.exists) {
        const {displayName,email}=userAuth;
        const createAt=new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch (error) {
            console.log("erroooe creating user",error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;

