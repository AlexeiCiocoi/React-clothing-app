
import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import styles from './cart-icon.module.scss'
import { ICartContext } from '../../context/cart/cart.interface';
import { CartContext } from '../../context/cart/cart.context';


export const CartIcon = () =>{

    const { isCartOpen , setIsCartOpen }  = useContext<ICartContext>(CartContext);

    const toggleIsCartOpen = () =>{
        setIsCartOpen(!isCartOpen);  
    } 

    return(
        <div className={styles.cartIconContainer} onClick={toggleIsCartOpen}>
            <ShoppingIcon className={styles.shopingIcon}  />
            <span className={styles.itemCount}>0</span>
        </div>
    )
}