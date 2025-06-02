import { JSX } from "react"
import  { signInWithGooglePopup ,
          createUserDocumentFromAuth,
          signInWithGoogleRedirect,
          auth
     } from '../../utils/firebase/firebase.utils' 
import { SignUpForm } from "../../components"
import { SignInForm } from "../../components"
import styles from './authentication.module.scss'

export const Authentication = ():JSX.Element => {

    const logGoogleUser = async () =>{
        try {
             const { user } = await signInWithGooglePopup();
             createUserDocumentFromAuth(user)
            
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <div className={styles.authenticationContainer}>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>sign in</button>


            <SignUpForm/>
            <SignInForm/>
          
        </div>
    )
}