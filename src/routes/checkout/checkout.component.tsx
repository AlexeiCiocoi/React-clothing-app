import { useContext } from "react"
import { CheckoutProductCard } from "../../components/checkoutProductCard/checkoutProductCard.component"
import { CartContext } from "../../context/cart/cart.context"

import styles from './checkout.module.scss'

export const Checkout = () =>{
    const {cartItems,setIsCartOpen} = useContext(CartContext)
    setIsCartOpen(false);

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.checkoutDetails}>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <div>
                {cartItems.map((product)=><CheckoutProductCard key={product.id} cartProduct={product} />)}
                
            </div>
        </div>
    ) 
}