import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "@/services/firebase/auth.firebase";
import { AppDispatch } from "@/store/store";
import { ICurrentUser, LoginCredentials } from "@/types/user.types";
import { mapFirebaseUserToCurrentUser } from "@/utils/firebase/mapFirebaseUserToCurrentUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearUser, setCurrentUser } from "../user/user.slice";
import { setAuthStatus } from "./auth.slice";
import { signUpCredentials } from "./auth.types";
import { updateUserAndAuthStatus } from "@/store/thunks/auth.thunks";



export const signInWithGoogleThunk = createAsyncThunk<void, void , { rejectValue: string,dispatch: AppDispatch }>(
    "auth/signInWithGoogle",
    async(_ ,{ rejectWithValue, dispatch }) =>{

        try {
            const userCredential = await signInWithGooglePopup();
            const firebaseUser = userCredential.user;                     
            
            if(!firebaseUser){
                return rejectWithValue('No user returned from Google Sign In');
            }

            await createUserDocumentFromAuth(firebaseUser);

            const user = mapFirebaseUserToCurrentUser(firebaseUser);
            dispatch(updateUserAndAuthStatus(user, true))

        } catch (error) {
           
            return rejectWithValue('Sign in failed');
        }
    }
)

export const signInWithEmailAndPassword = createAsyncThunk<
    void,
    LoginCredentials ,
    {rejectValue: string , dispatch: AppDispatch}
    >(
    "auth/signInWithEmailAndPassword",
    async({email , password}: LoginCredentials ,{rejectWithValue , dispatch} ) =>{

        const firebaseUser = await signInAuthUserWithEmailAndPassword({email, password})
        if(firebaseUser.error) return rejectWithValue(firebaseUser.error.message)

        const user = mapFirebaseUserToCurrentUser(firebaseUser.data!);

        dispatch(updateUserAndAuthStatus(user, true))   
    }
)

export const singUpUserWithEmailAndPassword = createAsyncThunk<
    void ,
    signUpCredentials,
    { rejectValue: string,dispatch: AppDispatch } >(
    "auth/singUpUserWithEmailAndPassword",
    async({email , password,displayName},{rejectWithValue , dispatch}) => {
        if (!email || !password) {
            return rejectWithValue("Email and password are required.");
        }
        const firebaseUser =  await createAuthUserWithEmailAndPassword({email , password});

        if(firebaseUser.error) return rejectWithValue(firebaseUser.error.message);

        await createUserDocumentFromAuth(firebaseUser.data! , { displayName});
        const user = mapFirebaseUserToCurrentUser(firebaseUser.data!);

        dispatch(updateUserAndAuthStatus(user, true))
    }
)

export const logOut = createAsyncThunk<void,void , {rejectValue: string , dispatch: AppDispatch}>(
    "auth/logOut",
    async(_,{rejectWithValue , dispatch})=>{
        try {
            signOutUser();
            dispatch(clearUser());
            dispatch(setAuthStatus(false));
        } catch (error) {
            rejectWithValue('Sign Out User Error');
        }   
    }
)