import { JSX } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import styles from  './navigation.module.scss'

export  const Navigation = (): JSX.Element =>{

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
                    <Link className={styles.navLink} to='/sign-in' >
                        Sign in
                    </Link>

                </div>
            </div>
            <Outlet />
        </>
    )

}