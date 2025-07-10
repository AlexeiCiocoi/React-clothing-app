import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartState } from "./cart.types";
import { IProduct } from "../../types/product.types";
import { addCartItem, decreseQuantity, removeProductFromCart,updateCartItemsReducer } from "./cart.utils";

const initialState: TCartState = {
    isCartOpen: false,
    cartCount: 0,
    cartItems: [],
    cartTotalPrice: 0
}





const cartSlice = createSlice({
    name:"categories",
    initialState,
    reducers: {
        setIsCartOpen: (state, action: PayloadAction<boolean>) =>{
            state.isCartOpen = action.payload
        },
        removeProduct: (state , action) =>{
            const newCartItems = removeProductFromCart(state.cartItems , action.payload);
            updateCartItemsReducer(state , newCartItems);
        },
        addItemToCart: (state , action) =>{
            const newCartItems = addCartItem(state.cartItems , action.payload);
            updateCartItemsReducer(state , newCartItems);
        },
        decreaseProductQuantity: (state , action) =>{
            const newCartItems = decreseQuantity(state.cartItems , action.payload);
            updateCartItemsReducer(state , newCartItems);
        }
        
    },
    
})

export const { removeProduct , setIsCartOpen , addItemToCart , decreaseProductQuantity} = cartSlice.actions;
export default cartSlice.reducer