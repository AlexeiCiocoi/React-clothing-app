import { RootState } from "@/store/store";




export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selecIsLoading = (state: RootState) => state.auth.isLoading