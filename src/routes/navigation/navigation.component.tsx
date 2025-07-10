import { JSX, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import styles from  './navigation.module.scss'




import { CartDropdown } from "../../features/cart/components/cart-dropdown/cart-dropdown.component";


import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartIcon } from "../../features/cart";
import { isCartOpenSelector } from "../../features/cart/cart.selectors";
import { signOutUser } from "@/services/firebase/auth.firebase";
import { selectIsAuthenticated } from "@/features/auth/auth.selectors";


export  const Navigation = (): JSX.Element =>{
  
    const isLoggedIn = useAppSelector(selectIsAuthenticated)
    const isCartOpen   = useAppSelector(isCartOpenSelector)
    const dispatch = useAppDispatch();

    const signOutUserHandler = () =>{
        signOutUser();

    }
    

    return(
        <>
            <div className={styles.navigation}>
                 
                <Link className={styles.logoContainer} to='/'>
                    <CrwnLogo className={styles.logo}/>
                </Link>
                <div className={styles.navLinksContainer}>
                    <Link className={styles.navLink} to='/shop' >
                        Shop
                    </Link>
                    {
                        isLoggedIn ? (<span className={styles.navLink} onClick={signOutUserHandler}>Sign Out</span> )
                            : <Link className={styles.navLink} to='/auth' > Sign In </Link>
                    }
                     <CartIcon />
                     
                </div>
              { isCartOpen && <CartDropdown/>}

            </div>
            <Outlet />
        </>
    )

}