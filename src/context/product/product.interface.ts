
import { IProduct } from "../../types/product.types";


    export interface IProductsContext {
        products: IProduct[];
        setProducts: (products: IProduct[])=> void;
    }