

export interface ISignInFormFields {
    email: string;
    password: string;
    [key: string]: string;
}

export interface ISignUpFormFields extends ISignInFormFields {
    displayName: string;
    repeatPassword: string;
}