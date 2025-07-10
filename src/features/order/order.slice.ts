import { createSlice } from "@reduxjs/toolkit";
import { addOrder } from "./order.thunks";
import { IOrder } from "@/types/order.types";


interface IOrderState {
    isLoading: boolean;
    orders: (IOrder & { id: string })[];
    error: string;
}

const initialState: IOrderState = {
    isLoading: false,
    orders: [],
    error: ""
}


const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(addOrder.fulfilled,(state, action) =>{
            state.orders = Array.isArray(action.payload) ? action.payload : [action.payload];
        })
    }
})

export default orderSlice.reducer;