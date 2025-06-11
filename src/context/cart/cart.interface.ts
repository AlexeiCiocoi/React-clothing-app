import { IProduct } from "../../types/product.types";

export interface ICartProducts extends IProduct{
    quantity: number;
}


export interface ICartContext {
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    cartItems:ICartProducts[];
    addItemToCard: (productToAdd: IProduct) => void;
    cartCount: number;
}