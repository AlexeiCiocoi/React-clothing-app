import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategoriesMap } from "./categories.types";
import { getCategoriesAndDocumets } from "@/services/firebase/firestore.firebase";



export const fetchCategories = createAsyncThunk<TCategoriesMap, void>(
    "categories/fetchCategories",
    async(): Promise<TCategoriesMap> =>{
        const data = await getCategoriesAndDocumets();
        return data;
    }
)