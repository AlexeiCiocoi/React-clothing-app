import { createContext, JSX, ReactNode, useEffect, useState } from "react";
import { ICartContext, ICartProducts } from "./cart.interface";
import { IProduct } from "../../types/product.types";


export const addCartItem = (cartItems: ICartProducts[] , productToAdd: IProduct): ICartProducts[] => {

        const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
        
        if(existingCartItem){
             return cartItems.map((item) => 
                 item.id === productToAdd.id 
                    ? {...item , quantity: item.quantity + 1}
                    : item

            )}
        return [...cartItems , {...productToAdd , quantity:1}]
}


export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setIsCartOpen:  () => {},
    cartItems: [],
    addItemToCard: () => {},
    cartCount: 0
})


export const CartProvider = ({ children}: {children: ReactNode}): JSX.Element =>{
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<ICartProducts[]>([]);
    const [cartCount , setCartCount] = useState<number>(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total , cartItem)=> total + cartItem.quantity , 0);
        setCartCount(newCartCount);

    },[cartItems])
    
    const addItemToCard = (productToAdd: IProduct) =>{
        setCartItems(addCartItem(cartItems ,productToAdd ))
    }

    const value: ICartContext = {isCartOpen , setIsCartOpen ,cartItems, addItemToCard, cartCount }

    return <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
}