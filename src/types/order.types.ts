import { IProduct } from "./product.types";

export interface IOrder {
    products: IProduct[];
    totalPrice: string;
    discount: string;
    date: Date;
    userId: string;
    paymentMethod: string;
}