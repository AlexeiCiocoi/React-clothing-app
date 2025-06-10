
import { useContext } from 'react'
import { Button } from '../button/button'
import styles from './cart-dropdown.module.scss'
import { ICartContext } from '../../context/cart/cart.interface'
import { CartContext } from '../../context/cart/cart.context'

export const CartDropdown = () =>{
    

    return (
        <div className={styles.cartDropdownContainer} >

            <div className={styles.cartItems}>

            </div>
            <Button
                appearence='inverted'>GO TO CHECKOUT</Button>
        </div>
    )
}