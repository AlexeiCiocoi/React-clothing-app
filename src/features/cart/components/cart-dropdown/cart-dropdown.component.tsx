

import { Button } from '../../../../components/button/button'
import styles from './cart-dropdown.module.scss'


import { CartItem } from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { getCartItemsSelector } from '../../cart.selectors'
import { setIsCartOpen } from '../../cart.slice'


export const CartDropdown = () =>{

    const cartItems = useAppSelector(getCartItemsSelector)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const goToCheckoutHdler = () =>{
        dispatch(setIsCartOpen(false));
        navigate('/checkout')
    }

    return (
        <div className={styles.cartDropdownContainer} >

            <div className={styles.cartItems}>
                {cartItems.map((product)=>(<CartItem key={product.id}  cartItem={product} />))}
            </div>
             <Button onClick={goToCheckoutHdler} appearence='inverted'>GO TO CHECKOUT</Button> 
           
               
        </div>
    )
}