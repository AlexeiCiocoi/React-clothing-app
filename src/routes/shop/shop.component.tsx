
import { useContext } from 'react'
import { ProductContext } from '../../context/product/product.context'
import { ProductCard } from '../../components'
import styles from './shop.module.scss'

export const Shop = () =>{
    const {products} = useContext(ProductContext)

    return (
        <div className={styles.productsContainer}>
            {products.map((product) =>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )


}