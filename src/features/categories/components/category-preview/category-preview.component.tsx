import { IProduct } from '../../../../types/product.types'
import { ProductCard } from '../../../../components/product-card/product-card.component'
import styles from './category-preview.module.scss'

type TCategoryPreview = {
    title: string;
    products: IProduct[];
}

export const CategoryPreview = ({title , products}: TCategoryPreview) =>{
 
    
    return (
        <div className={styles.categoryPreviewContainer}>
            <h2>
                <span>{title.toUpperCase()}</span>
            </h2>
            <div className={styles.preview}>
                {
                    products.filter((_: any,idx: number) => idx < 4)
                    .map((product: IProduct)=> <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}