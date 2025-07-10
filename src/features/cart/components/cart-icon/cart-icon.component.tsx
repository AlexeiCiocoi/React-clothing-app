

import {ReactComponent as ShoppingIcon} from '@/assets/shopping-bag.svg'
import styles from './cart-icon.module.scss'

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCartCountSelector, isCartOpenSelector } from '@/features/cart/cart.selectors';
import { setIsCartOpen } from '@/features/cart/cart.slice';


export const CartIcon = () =>{

    const cartCount = useAppSelector(getCartCountSelector);
    const isCartOpen = useAppSelector(isCartOpenSelector);
    const dispatch = useAppDispatch();
   

    

    const toggleIsCartOpen = () =>{
        dispatch(setIsCartOpen(!isCartOpen));  
    } 

    return(
        <div className={styles.cartIconContainer} onClick={toggleIsCartOpen}>
            <ShoppingIcon className={styles.shopingIcon}  />
            <span className={styles.itemCount}>{cartCount}</span>
        </div>
    )
}