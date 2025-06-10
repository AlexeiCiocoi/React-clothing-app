import { JSX, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import styles from  './navigation.module.scss'
import { UserContext } from "../../context/user/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {  IUserContext } from "../../context/user/user.interface";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart/cart.context";
import { ICartContext } from "../../context/cart/cart.interface";


export  const Navigation = (): JSX.Element =>{
    const {currentUser} = useContext<IUserContext>(UserContext)
    const {isCartOpen }  = useContext<ICartContext>(CartContext)
    

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
                        currentUser?.isLoggedIn ? (<span className={styles.navLink} onClick={signOutUser}>Sign Out</span> )
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