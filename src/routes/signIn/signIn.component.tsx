import { JSX } from "react"
import  { signInWithGooglePopup ,
          createUserDocumentFromAuth }
        from '../../utils/firebase/firebase.utils'

export const SignIn = ():JSX.Element => {

    const logGoogleUser = async () =>{

        try {
             const { user } = await signInWithGooglePopup();
             createUserDocumentFromAuth(user)
            
        } catch (error) {
            console.log(error)
        }
       
        
    }

    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>sign in</button>
        </div>
    )
}