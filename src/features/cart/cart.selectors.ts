import { RootState } from "../../store/store";



export const isCartOpenSelector = (state: RootState) => state.cart.isCartOpen;
export const getCartItemsSelector = (state: RootState) => state.cart.cartItems;
export const getCartPriceSelector = (state: RootState) => state.cart.cartTotalPrice;
export const getCartCountSelector = (state: RootState) => state.cart.cartCount;

