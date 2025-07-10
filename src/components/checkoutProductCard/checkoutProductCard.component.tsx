

import styles from './checkoutProductCard.module.scss'

import { IProduct } from "../../types/product.types";
import { useAppDispatch } from "@/store/hooks";
import { addItemToCart, decreaseProductQuantity, removeProduct } from '@/features/cart/cart.slice';


interface IChekoutProductProps{
    cartProduct: IProduct
}
export const CheckoutProductCard = ({cartProduct}: IChekoutProductProps) =>{
    const {name , quantity , price,imageUrl , id} = cartProduct;

    const dispatch = useAppDispatch();

    const removeQuantityFromProduct = () => dispatch(decreaseProductQuantity(id));
    const addQuantityToProduct = () => dispatch(addItemToCart(cartProduct));
    const removeProductHandler = () => dispatch(removeProduct(id));

    return (
        <div className={styles.checkoutItemContainer}> 
                <img className={styles.imageContainer} src={imageUrl} alt={`${name}`}/> 
                <span className={styles.name}>{name}</span>
                <div className={styles.quantity}>
                    <span className={styles.arrow} onClick={removeQuantityFromProduct}>&#10094;</span>
                    <span>{quantity}</span>
                    <span className={styles.arrow} onClick={addQuantityToProduct}>&#10095;</span>
                </div>
                <span className={styles.price}> {(price * quantity)} </span>
                <div className={styles.removeButton} onClick={removeProductHandler}>&#10005;</div>
            </div>
    )
}