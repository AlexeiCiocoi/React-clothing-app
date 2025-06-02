import { FirebaseError, initializeApp } from 'firebase/app';
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        User,
        UserCredential,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword
 } from 'firebase/auth';

 import {getFirestore,doc,getDoc,setDoc, DocumentReference, DocumentData} from 'firebase/firestore'


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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth,googleProvider)
export const signInWithGoogleRedirect = (): Promise<UserCredential> => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User,additionalInfo={}):Promise<DocumentReference<DocumentData, DocumentData>> =>{
  const userDocRef = doc(db,'users',userAuth.uid)
  
  const userSnapshot = await getDoc(userDocRef)
  if(!userSnapshot.exists()){
    const { displayName , email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
          displayName ,
          email,
          createdAt,
          ...additionalInfo
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

interface IUserAuth{
  email: string;
  password: string;
}

interface IAuthResult{
  user?: User;
  error?: {
    code: string;
    message: string
  }
}
export const createAuthUserWithEmailAndPassword = async ({email, password}: IUserAuth):Promise<IAuthResult> =>{
  if(!email || !password) return {
      error: {
        code: "auth/invalid-input",
        message: "Email and password must be provided.",
      },
    };

    try {
      const { user }  = await createUserWithEmailAndPassword(auth ,email, password )
      return { user };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
          return{
            error: {
              code: error.code,
              message: error.message
            }
          }
      }
    }
    return {
      error: {
        code: "auth/unknown-error",
        message: "An unknown error occurred.",
      },
    };
   
}

export const signInAuthUserWithEmailAndPassword = async ({email, password}: IUserAuth):Promise<IAuthResult> =>{
  if(!email || !password) return {
      error: {
        code: "auth/invalid-input",
        message: "Email and password must be provided.",
      }};
  try {
      const { user }  = await signInWithEmailAndPassword(auth ,email, password )
      return { user };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
          return{
            error: {
              code: error.code,
              message: error.message
            }
          }
      }
    }
    return {
      error: {
        code: "auth/unknown-error",
        message: "An unknown error occurred.",
      },
    };
  

}