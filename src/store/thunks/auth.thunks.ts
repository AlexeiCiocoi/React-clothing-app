import { ICurrentUser } from "@/types/user.types";
import { AppDispatch } from "../store";
import { setCurrentUser } from "@/features/user/user.slice";
import { setAuthStatus } from "@/features/auth/auth.slice";


export const updateUserAndAuthStatus = (user: ICurrentUser , status: boolean) => (dispatch: AppDispatch) =>{

    dispatch(setCurrentUser(user));
    dispatch(setAuthStatus(true))
}