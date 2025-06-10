import { createContext, JSX, ReactNode, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";
import { ICurrentUser, IUserContext } from "./user.interface";



export const UserContext = createContext<IUserContext>({
    currentUser: null,
    setCurrentUser: () => {},
})


export const UserProvider = ({ children}: {children: ReactNode}): JSX.Element =>{
    const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null)
   
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user) => {
       if(user){
         createUserDocumentFromAuth(user)
       }
     
       setCurrentUser({
                displayName: user?.displayName ?? ' ',
                email: user?.email ?? '',
                isLoggedIn: !!(user?.email)
            })
    })
    
    return unsubscribe;
  },[])

    return <UserContext.Provider value={{currentUser , setCurrentUser}}>
                {children}
            </UserContext.Provider>
}