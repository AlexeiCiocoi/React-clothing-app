import { FirebaseError, initializeApp } from 'firebase/app';
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        User,
        UserCredential
 } from 'firebase/auth';

 import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
import { aw } from 'react-router/dist/development/register-BkDIKxVz';

const firebaseConfig = {
  apiKey: "AIzaSyC5a8z_3RfTh-yxadcDtvQ6QE1ZYTUsWz4",
  authDomain: "crown-db-9fac1.firebaseapp.com",
  projectId: "crown-db-9fac1",
  storageBucket: "crown-db-9fac1.firebasestorage.app",
  messagingSenderId: "318751584994",
  appId: "1:318751584994:web:5468f94f78fc6fbf1324bb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth,provider)


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) =>{
  const userDocRef = doc(db,'users',userAuth.uid)
  
  const userSnapshot = await getDoc(userDocRef)
  if(!userSnapshot.exists()){
    const { displayName , email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
          displayName ,
          email,
          createdAt
      })
    } catch (error: unknown) {

      if (error instanceof FirebaseError) {
          console.log(error.code);   
          console.log('error creating the User' , error.message);
      }
     
    }
  }
  return userDocRef;
}