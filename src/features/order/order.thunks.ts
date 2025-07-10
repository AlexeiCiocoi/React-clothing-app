import { addOrderService } from "@/services/firebase/firestore.firebase";
import { IOrder } from "@/types/order.types";

import { createAsyncThunk } from "@reduxjs/toolkit";



export const addOrder = createAsyncThunk<
    IOrder & {id: string},
    {userId: string,order: IOrder},
    {rejectValue: string }
    >(
    'orders/addOrder',
     async({userId , order},{rejectWithValue}) =>{

        const res = await addOrderService(userId,order);
        if(!res.success || !res.data) return  rejectWithValue(res.error?.message!);
        console.log('responce from service ', res)
        return res.data;

}
 
)
