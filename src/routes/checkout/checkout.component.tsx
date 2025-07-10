
import { CheckoutProductCard } from "../../components/checkoutProductCard/checkoutProductCard.component"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { getCartItemsSelector, getCartPriceSelector } from "../../features/cart/cart.selectors"
import { Button } from "@/components/button/button"
import { SelectUser } from "@/features/user/user.selectors"
import { IOrder } from "@/types/order.types"
import { useNavigate } from "react-router"

import { addOrder } from "@/features/order/order.thunks"

// import styles from '../checkout/'
import styles from './checkout.module.scss'
export const Checkout = () =>{
 
    const cartItems = useAppSelector(getCartItemsSelector);
    const cartTotalPrice = useAppSelector(getCartPriceSelector);
    const user = useAppSelector(SelectUser);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
     
    const headerBlockItems: string[] = [
        'Product','Description','Quantity','Price','Remove'
    ]


    const checkoutHeaderDescriptions = () =>{
        return headerBlockItems.map(block => {
            return <div key={block} className={styles.headerBlock}>
                        <span>{block}</span> 
                    </div>
            })
    }

    const createPaymentMethod = async () =>{

        const order: IOrder = {
            products: [...cartItems],
            totalPrice: cartTotalPrice.toString(),
            discount: '0',
            date: new Date(),
            userId: user?.uid!,
            paymentMethod: 'stripe'

        }
        console.log(' createPaymentMethod  order', order)
        try {
            await dispatch(addOrder({userId:order.userId , order})).unwrap();
            navigate('/shop');
        } catch (error) {
            console.log('Unknown Error',error)
        }



    }

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.checkoutHeader}>
                {
                    checkoutHeaderDescriptions()
                }

            </div>
            
                {cartItems.map((product)=><CheckoutProductCard key={product.id} cartProduct={product} />)}
            <div className={styles.cartFooter}>
                <Button onClick={createPaymentMethod} appearence="default" >Payment</Button>    
                <span className={styles.total}>Total: {cartTotalPrice}</span>
            </div>
            
        </div>
    ) 
}