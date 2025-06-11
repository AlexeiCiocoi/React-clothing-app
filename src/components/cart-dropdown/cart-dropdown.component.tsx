
import { useContext } from 'react'
import { Button } from '../button/button'
import styles from './cart-dropdown.module.scss'

import { CartContext } from '../../context/cart/cart.context'
import { CartItem } from '../cart-item/cart-item.component'
import { Link } from 'react-router'


export const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)

    return (
        <div className={styles.cartDropdownContainer} >

            <div className={styles.cartItems}>
                {cartItems.map((product)=>(<CartItem key={product.id}  cartItem={product} />))}
            </div>
            <Link to={'/checkout'} >  <Button appearence='inverted'>GO TO CHECKOUT</Button> </Link>
           
               
        </div>
    )
}