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

    return(
        <div className={styles.authenticationContainer}>
            <SignInForm/>
            <SignUpForm/>
            
        </div>
    )
}