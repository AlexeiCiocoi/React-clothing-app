import { JSX, useContext, useState } from "react";
import { ISignUpFormFields } from "./signUpForm.props";
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { FormInput } from "../formInput/formInput.component";
import styles from './signUpForm.module.scss'
import { Button } from "../button/button";
import { UserContext } from "../../context/user/user.context";

const defaultFormFields: ISignUpFormFields = {
    displayName:'',
    email:'',
    password:'',
    consfirmPassword:''
}

export const SignUpForm =(): JSX.Element=>{

    const [formFields, setFormFields] = useState<ISignUpFormFields>(defaultFormFields);
    const {displayName , email,password,consfirmPassword} = formFields;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = event.target;
        setFormFields({...formFields , [name]: value})
       
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> =>{
        event.preventDefault();

        if(password !== consfirmPassword) return;
        try {
             const res  = await createAuthUserWithEmailAndPassword({email,password});
             
             if(!res.user) {
                console.log('error', res.error)
                return;
             };
             
            const docUser =  await createUserDocumentFromAuth(res.user,{displayName})
            resetFormFields();

        } catch (error) {
              console.log(error)
        }
       
    }

   const resetFormFields = () =>{
    setFormFields(defaultFormFields);
   }

    return(
        <div className={styles.signUpContainer}>
            <h2>Dont have an acount ?</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
           
                <FormInput label='Display Name' required={true} type="text" onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label='Email' required type="email" onChange={handleChange} name='email' value={email} />
                <FormInput label='Password'required type="password" onChange={handleChange} name='password' value={password} />
                <FormInput label='Confirm Password' required type="password"  onChange={handleChange} name='consfirmPassword' value={consfirmPassword} />

                <Button appearence="default" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}