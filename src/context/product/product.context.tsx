import { createContext, JSX, ReactNode, useEffect, useState } from "react";
import { IProductsContext } from "./product.interface";
import SHOP_DATA from '../../shop-data/shop-data.json'
import { IProduct } from "../../types/product.types";



export const ProductContext = createContext<IProductsContext>({
    products:[],
    setProducts: () => {}
})


export const ProductProvider = ({ children}: {children: ReactNode}): JSX.Element =>{
    const [products, setProducts] = useState<IProduct[]>(SHOP_DATA)
    
  

    return <ProductContext.Provider value={{products , setProducts}}>
                {children}
            </ProductContext.Provider>
}