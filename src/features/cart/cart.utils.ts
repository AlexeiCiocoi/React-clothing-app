import { IProduct } from "../../types/product.types";
import { TCartState } from "./cart.types";


export const addCartItem = (cartItems:  IProduct[] , productToAdd: IProduct): IProduct[] => {

        const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
        
        if(existingCartItem){
             return cartItems.map((item) => 
                 item.id === productToAdd.id 
                    ? {...item , quantity: item.quantity + 1}
                    : item

            )}
        return [...cartItems , {...productToAdd , quantity:1}]
}

export const decreseQuantity =(cartItems: IProduct[] , productId: number): IProduct[] =>{
    const existingCartItem = cartItems.find(item => item.id === productId);
       
        if(!existingCartItem) return cartItems;
         
        if(existingCartItem.quantity === 1){
           
            return cartItems.filter(product => product.id !== productId)
        } 
        
        return cartItems.map((item) => 
            item.id === productId
                ? {...item , quantity: item.quantity - 1}
                : item )

}

export const removeProductFromCart = (cartItems: IProduct[], id: number): IProduct[] =>{
    return cartItems.filter(product => product.id !== id)
}

export const updateCartItemsReducer = (state: TCartState ,cartItems: IProduct[]) =>{

        const { totalPrice , totalCount } = cartItems.reduce((acc , item)=>{
            acc.totalCount += item.quantity;
            acc.totalPrice += item.quantity * item.price;
            return acc;
        },
        {totalPrice:0, totalCount:0} );

        state.cartItems = cartItems;
        state.cartCount = totalCount;
        state.cartTotalPrice = totalPrice;
        
    }