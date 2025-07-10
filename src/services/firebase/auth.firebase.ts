import { 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    User,
    UserCredential
 } from "@firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "./firebase.config";
import { LoginCredentials } from "@/types/user.types";
import { BaseResponse } from "@/types/api.types";
import { handleFirebaseError } from "@/utils/firebase-error/handleFirebaseError";
import { createBaseError } from "@/utils/errorHandlers/createError";
import { AppDispatch } from "@/store/store";
import { mapFirebaseUserToCurrentUser } from "@/utils/firebase/mapFirebaseUserToCurrentUser";

import { fetchCategories } from "@/features/categories/categories.thunks";
import { updateUserAndAuthStatus } from "@/store/thunks/auth.thunks";


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGooglePopup = (): Promise<UserCredential> => 
    signInWithPopup(auth,googleProvider)

export const signInWithGoogleRedirect = (): Promise<UserCredential> =>
     signInWithRedirect(auth,googleProvider);

export const  signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: (user: User | null)=> void) =>
     onAuthStateChanged(auth , callback);


export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInfo={}
):Promise<BaseResponse<null>> =>{
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
      return handleFirebaseError(error);
    }
  }
  return {data: null};
}

export const createAuthUserWithEmailAndPassword = async ({
    email,
    password
}: LoginCredentials):Promise<BaseResponse<User>> => {

  if(!email || !password) return createBaseError("auth/invalid-input" ,"Email and password must be provided.");

    try {
      const res  = await createUserWithEmailAndPassword(auth ,email, password )

      return  { data: res.user};

    } catch (error: unknown) {
      return handleFirebaseError(error);
    }
}


export const signInAuthUserWithEmailAndPassword = async ({email, password}: LoginCredentials):Promise<BaseResponse<User>> =>{
  if(!email || !password) return createBaseError("auth/invalid-input" ,"Email and password must be provided.")
  
  try {

      const res  = await signInWithEmailAndPassword(auth ,email, password )
      return  { data: res.user};

  } catch (error: unknown) {
    return handleFirebaseError(error);
    }
} 


export const initializeAuthListener  = (dispatch: AppDispatch) =>{

  const authListener = onAuthStateChangedListener( 
    async (user) =>{
      if(user){
        await createUserDocumentFromAuth(user);
        const mappedUser = mapFirebaseUserToCurrentUser(user)

        dispatch(updateUserAndAuthStatus(mappedUser, true))
      }
    }
  )
  dispatch(fetchCategories())
  return authListener;

}






