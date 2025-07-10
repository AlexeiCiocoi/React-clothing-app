
import { ICartItem } from "./cart-item.types";

import styles from './cart-item.module.scss'

export const CartItem = ({cartItem}: ICartItem) =>{
    const { imageUrl , name,price,quantity} = cartItem;

    return(
        <div className={styles.cartItemContainer} >
            <img src={imageUrl} alt={`${name}`} />
            <div className={styles.itemDetails}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>
                    {quantity} X ${price}
                </span>
            </div>
            
               
        </div>
    )
}