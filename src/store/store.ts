import {  configureStore } from '@reduxjs/toolkit'



import  categoriesSlice  from "../features/categories/categories.slice"
import cartSlice from '../features/cart/cart.slice';
import userSlice from '@/features/user/user.slice';
import authSlice from '@/features/auth/auth.slice';
import notificationSlice from "@/features/notifications/notifications.slice"
import orderSlice from "@/features/order/order.slice"


export const store = configureStore({
    reducer:{
        user: userSlice,
        auth: authSlice,
        categories: categoriesSlice,
        cart: cartSlice,
        notification: notificationSlice,
        orders: orderSlice
    },
   
})



export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;