import { ICartProducts } from "../../context/cart/cart.interface"

import styles from './checkoutProductCard.module.scss'


interface IChekoutProductProps{
    cartProduct: ICartProducts
}
export const CheckoutProductCard = ({cartProduct}: IChekoutProductProps) =>{
    const {name , quantity , price,imageUrl} = cartProduct
    return (
        <div className={styles.checkoutProductCard}> 
                <img src={imageUrl} alt={`${name}`}/>
                <span>{name}</span>
                <div></div>
                <span> {(price * quantity)} </span>
                <span>X</span>
            </div>
    )
}