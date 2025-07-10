import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router'

import styles from './category.module.scss'

import { IProduct } from '../../types/product.types';
import { ProductCard } from '../../components';
import { useAppSelector } from '../../store/hooks';
import { selectCategories } from '../../features/categories/categories.selectors';

export const Category = () =>{

    const { category } = useParams();
    const [products , setProducts] = useState<IProduct[]>([]);
    const categories = useAppSelector(selectCategories)

    useEffect(()=>{
        if(category && categories[category]){
            setProducts(categories[category])
        } 
        
    },[categories,category])


    return (
        <div className={styles.categoryContainer}>
            {
               products && products.map((product)=> <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
}


