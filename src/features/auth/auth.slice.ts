import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { signInWithEmailAndPassword, signInWithGoogleThunk, singUpUserWithEmailAndPassword } from "./auth.thunks";
import { IAuthState } from "./auth.types";





const initialState: IAuthState = {
    isLoading: false,
    error: null,
    isAuthenticated: false
};



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setAuthStatus: ( state , action: PayloadAction<boolean>) =>{
            state.isAuthenticated = action.payload;
            state.isLoading = false;;
        },
        logout: (state) =>{
            state.isAuthenticated = false
        }
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signInWithGoogleThunk.pending, (state)=>{
            state.isLoading = true;
          
        })
        .addCase(signInWithGoogleThunk.rejected,(state, action)=>{
            state.isLoading = false;
            state.error = action.payload ?? "Unknown error"
        })
        .addCase(signInWithEmailAndPassword.pending , (state)=>{
            state.isLoading = true;
        })
        .addCase(signInWithEmailAndPassword.rejected , (state,action)=>{
            state.isLoading = false;
            state.error = action.payload ?? "user signIn error";
            console.log('Rejected payload',action.payload);
        })
        .addCase(singUpUserWithEmailAndPassword.pending , (state)=>{
            state.isLoading = true;
            // state.error = null;
        })
        .addCase(singUpUserWithEmailAndPassword.rejected , (state,action)=>{
            state.isLoading = false;
            state.error = action.payload ?? "user signUp with email and password error"
        })
    }   
});

export const { setAuthStatus , logout } = authSlice.actions;

export default authSlice.reducer;