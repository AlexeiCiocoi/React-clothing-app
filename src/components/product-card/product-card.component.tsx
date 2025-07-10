import { JSX } from "react"

import styles from './product-card.module.scss'

import { Button } from "../button/button"
import { IProductCardProps } from "./product-card.props"
import { useAppDispatch } from "@/store/hooks"
import { addItemToCart } from "@/features/cart/cart.slice"

export const ProductCard = ({product}: IProductCardProps): JSX.Element =>{
    const { name , price ,imageUrl} = product
    const dispatch = useAppDispatch();

    const addproductToCart = () => dispatch(addItemToCart(product));


    return (
        <div className={styles.productCardContainer}> 
            <img src={imageUrl} alt={`${name}`} />
            <div className={styles.footer}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{price}</span>
            </div>
            <Button appearence='inverted' onClick={addproductToCart}>Add to card</Button>
        </div>

    )
}