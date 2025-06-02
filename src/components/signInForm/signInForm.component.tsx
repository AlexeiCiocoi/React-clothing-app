import { JSX, useState } from "react";
import { ISignInFormFields } from "./signInForm.props";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { FormInput } from "../formInput/formInput.component";
import styles from './signInForm.module.scss'
import { Button } from "../button/button";

const defaultFormFields: ISignInFormFields = {
    email:'',
    password:'',
}

export const SignInForm =(): JSX.Element=>{

    const [formFields, setFormFields] = useState<ISignInFormFields>(defaultFormFields);
    const { email,password} = formFields;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = event.target;
        setFormFields({...formFields , [name]: value})
       
    }
    const signInWithGoogle = async () =>{
            try {
                 const { user } = await signInWithGooglePopup();
                 createUserDocumentFromAuth(user)
                
            } catch (error) {
                console.log(error)
            }
        }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> =>{
        event.preventDefault();

        try {
             const res = await signInAuthUserWithEmailAndPassword({email, password})
            resetFormFields();
            console.log('response',res)

        } catch (error) {
              console.log(error)
        }
    }
   const resetFormFields = () =>{
    setFormFields(defaultFormFields);
    }

    return(
        <div className={styles.signUpContainer}>
            <h2>Already have an acount ?</h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            
                <FormInput label='Email' required type="email" onChange={handleChange} name='email' value={email} />
                <FormInput label='Password'required type="password" onChange={handleChange} name='password' value={password} />
            <div className="button-container">
                <Button appearence="default" type="submit">Sign In</Button>
                <Button appearence="google" type='button' onClick={signInWithGoogle}>Google Sign In</Button>

            </div>
                
            </form>
        </div>
    )
}