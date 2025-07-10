import { IProduct } from "../../types/product.types";


export type TCategoriesMap = Record<string , IProduct[]>

export type ICategoriesState ={
    categoriesMap: TCategoriesMap ;
    isLoading: boolean;
    error: string | null;

}