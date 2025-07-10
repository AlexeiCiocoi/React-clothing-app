import { ISignInFormFields, ISignUpFormFields } from "@/types/form.types";
import { ValidationRules } from "./validateForm";



export const signInValidationRules: ValidationRules<ISignInFormFields> = {

    email:{
        required: true , 
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email',
        }
    },
    password:{
        required: true,
        minLength:{
            value: 6,
            message: " Password must be at least 6 characters long"
        }
    }
} 

export const signUpValidationRules: ValidationRules<ISignUpFormFields> = {

    email: signInValidationRules.email,
    password: signInValidationRules.password,
    displayName: {
        required: true,
        minLength:{
            value: 3,
            message: "Name must be at least 3 characters long"
        }
        
    },
    repeatPassword: {
        required: true,

        match: {
            field: 'password',
            message: "passwords dont match"
        },
        
    },
}