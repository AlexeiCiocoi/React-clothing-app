import { JSX, useState } from "react";

import { ISignUpFormFields } from "@/types/form.types";
import { FormInput } from "../../../../components/formInput/formInput.component";
import styles from './signUpForm.module.scss'
import { Button } from "../../../../components/button/button";
import { singUpUserWithEmailAndPassword } from "@/features/auth/auth.thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selecIsLoading, selectAuthError } from "@/features/auth/auth.selectors";
import { useNavigate } from "react-router";
import useFormHook from "@/hooks/useFormHook";
import { signUpValidationRules } from "@/utils/formValidation/validationRules";
import  useNotifier  from "@/hooks/useNotifier";

const defaultFormFields: ISignUpFormFields = {
    displayName:'',
    email:'',
    password:'',
    repeatPassword:''
}

export const SignUpForm =(): JSX.Element=>{
    const isLoading = useAppSelector(selecIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { notify } = useNotifier();
    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        validate
    } = useFormHook<ISignUpFormFields>(defaultFormFields , signUpValidationRules);

    const onSubmit = async () =>{

        if(!validate()){
           Object.values(errors).forEach((message)=>{
            if(typeof message === 'string') notify(message, 'error')
           })
            return ;
        };

        try {
            await dispatch(singUpUserWithEmailAndPassword({
                email: values.email,
                password: values.password,
                displayName: values.displayName
            })).unwrap();
            notify("User created with success",'success');
            navigate('/');
        } catch (error) {
              console.log("creating user error:",error)
        }
    }

    return(
        <div className={styles.signUpContainer}>
            <h2>Dont have an acount ?</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={handleSubmit(onSubmit)}>
           
                <FormInput label='Display Name' error={errors.displayName} required={true} type="text" onChange={handleChange}  name='displayName' value={values.displayName} />
                <FormInput label='Email' error={errors.email} required type="email" onChange={handleChange} name='email' value={values.email} />
                <FormInput label='Password' error={errors.password} required type="password" onChange={handleChange} name='password' value={values.password} />
                <FormInput label='Confirm Password' error={errors.confirmPassword} required type="password"  onChange={handleChange} name='confirmPassword' value={values.repeatPassword} />

                <Button 
                    disabled={isLoading}
                    appearence="default"
                    type="submit">
                        {isLoading ? "Signing up..." : "Sign Up"}
                </Button>
            </form>
        </div>
    )
}