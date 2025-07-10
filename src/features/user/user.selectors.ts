import { RootState } from "@/store/store";


export const  SelectUser = (state: RootState) => state.user.currentUser;
export const  SelectUserError = (state: RootState) => state.user.error;
export const  SelectUserIsLoading = (state: RootState) => state.user.isUserLoading;