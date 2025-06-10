import { createContext, JSX, ReactNode, useEffect, useState } from "react";
import { ICartContext } from "./cart.interface";





export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setIsCartOpen:  () => {}
})


export const CartProvider = ({ children}: {children: ReactNode}): JSX.Element =>{
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const value = {isCartOpen , setIsCartOpen }
  

    return <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
}