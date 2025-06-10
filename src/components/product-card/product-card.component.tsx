import { JSX } from "react"
import styles from './product-card.module.scss'
import { Button } from "../button/button"
import { IProductCardProps } from "./product-card.props"

export const ProductCard = ({product}: IProductCardProps): JSX.Element =>{
    const {id , name , price ,imageUrl} = product
    return (
        <div className={styles.productCardContainer}> 
            <img src={imageUrl} alt={`${name}`} />
            <div className={styles.footer}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{price}</span>
            </div>
            <Button appearence='inverted'>Add to card</Button>
        </div>

    )
}