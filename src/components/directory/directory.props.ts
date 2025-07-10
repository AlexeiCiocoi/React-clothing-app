import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICategoryItem } from '../directory-item/directory-item.props'

export interface ICategories extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    categories: ICategoryItem[];
}