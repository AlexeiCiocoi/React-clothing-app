import { signInAuthUserWithEmailAndPassword } from "@/services/firebase/auth.firebase";
import { ICurrentUser } from "@/types/user.types";
import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signInWithGoogleThunk } from "../auth/auth.thunks";


interface UserState {
  currentUser: ICurrentUser | null;
  isUserLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isUserLoading: false,
  error: null,
};


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setCurrentUser: (state,action)=>{
            state.currentUser = action.payload;
            state.isUserLoading = false;
            
        },
        clearUser: (state) =>{
            state.currentUser = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signInWithGoogleThunk.pending, (state) =>{
            state.isUserLoading = true;
        })
        .addCase(signInWithGoogleThunk.rejected, (state,action) =>{
            state.isUserLoading = false;
            state.error = action.payload ?? " Could not signIn "
        })
        .addCase(signInWithEmailAndPassword.pending, (state,action) =>{
            state.isUserLoading = false;
            state.error = action.payload ?? " Could not signIn "
        })
        .addCase(signInWithEmailAndPassword.rejected, (state,action) =>{
            state.isUserLoading = false;
            state.error = action.payload ?? " Could not signIn "
        })

    }   
})

export const { setCurrentUser , clearUser } = userSlice.actions;

export default userSlice.reducer;