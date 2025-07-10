import { useNavigate } from "react-router";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { signInWithEmailAndPassword, signInWithGoogleThunk } from "@/features/auth/auth.thunks";
import { selecIsLoading } from "@/features/auth/auth.selectors";
import useFormHook from "@/hooks/useFormHook";
import { signInValidationRules } from "@/utils/formValidation/validationRules";
import { ISignInFormFields } from "@/types/form.types";
import { FormInput } from "@/components/formInput/formInput.component";
import { Button } from "@/components/button/button";

import styles from './signInForm.module.scss'
import  useNotifier  from "@/hooks/useNotifier";


export const SignInForm = () =>{ 
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selecIsLoading)
    const { notify } = useNotifier();
    const navigate = useNavigate();
    const { 
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        validate
         } = useFormHook<ISignInFormFields>({email:'',password:''} , signInValidationRules);
    


    const handleGoogleLogin = () =>{
        dispatch(signInWithGoogleThunk())
    }

    const onSubmit = async () => {
      
        if(!validate()){
           Object.values(errors).forEach((message)=>{
            if(typeof message === 'string') notify(message, 'error')
           })
            return ;
        };

        try {
            await dispatch(signInWithEmailAndPassword({ email: values.email, password: values.password })).unwrap();
            notify("Успешный вход!", "success");
            navigate("/");
            resetForm();
        } catch (error) {
            notify("Неверный логин или пароль", "error");
        }
    }

    return(
        <div className={styles.signInContainer}>
            <h2>Already have an acount ?</h2>
            <span> Sign in with your email and password</span>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <FormInput error={errors.email} label='Email' required type="email" onChange={handleChange} onBlur={handleBlur}  name='email' value={values.email} />
                <FormInput error={errors.password} label='Password'required type="password" onChange={handleChange} onBlur={handleBlur} name='password' value={values.password} />
            <div className={styles.buttonContainer}>
                <Button disabled={isLoading} appearence="default" type="submit">Sign In</Button>
                <Button appearence="google" type='button' onClick={handleGoogleLogin}>Google Sign In</Button>

            </div>
                
            </form>
        </div>
    )
}