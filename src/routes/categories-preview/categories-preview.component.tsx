
import styles from './categories-preview.module.scss'

import { CategoryPreview } from '../../components'
import { useAppSelector } from '../../store/hooks'
import { selectCategories } from '../../features/categories/categories.selectors'


export const CategoriesPreview = () =>{

    const categories = useAppSelector(selectCategories)

  
    return (
       <div className={styles.categoryPreviewContainer}>
            {
                Object.keys(categories).map(title =>{
                    const products = categories[title]
                    return <CategoryPreview title={title} key={title} products={products} />
                })
            }
       </div>
        
    )


}