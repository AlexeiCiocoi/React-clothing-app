import { BaseError } from "@/types/api.types";
import { LoginCredentials } from "@/types/user.types";

export type IAuthState={
    isAuthenticated: boolean
    isLoading: boolean;
    error: string | null;
}

export type signUpCredentials =  LoginCredentials & {
    displayName: string;
}
