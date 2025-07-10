import { IProduct } from "../../types/product.types";


export type TCartState = {
    isCartOpen: boolean;
    cartCount: number;
    cartItems:IProduct[];
    cartTotalPrice: number;

}