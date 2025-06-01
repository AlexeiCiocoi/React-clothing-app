import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICategoryItem } from '../category-item/category-item.props'

export interface ICategories extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    categories: ICategoryItem[];
}