import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategoriesState, TCategoriesMap } from "./categories.types";
import { fetchCategories } from "./categories.thunks";





const initialState: ICategoriesState = {
    categoriesMap: {},
    isLoading: false,
    error: null
}


const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchCategories.pending , (state) =>{
                state.isLoading = true;
            })
            .addCase(fetchCategories.fulfilled,(state , action: PayloadAction<TCategoriesMap>) =>{
                state.isLoading = false;
                state.categoriesMap = action.payload;
            })
            .addCase(fetchCategories.rejected , (state,action)=>{
                state.isLoading = false;
                state.error = action.error.message || "Не удалось загрузить категории";
            })
    }

})



export default categoriesSlice.reducer;