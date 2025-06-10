import { JSX, useContext, useState } from "react";
import { ISignInFormFields } from "./signInForm.props";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { FormInput } from "../formInput/formInput.component";
import styles from './signInForm.module.scss'
import { Button } from "../button/button";
import { UserContext } from "../../context/user/user.context";

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
                await signInWithGooglePopup();
                 
            } catch (error) {
                console.log(error)
            }
        }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> =>{
        event.preventDefault();

        try {
             const {user} = await signInAuthUserWithEmailAndPassword({email, password})
            resetFormFields();
            if(!user) return
         

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
            <div className={styles.buttonContainer}>
                <Button appearence="default" type="submit">Sign In</Button>
                <Button appearence="google" type='button' onClick={signInWithGoogle}>Google Sign In</Button>

            </div>
                
            </form>
        </div>
    )
}