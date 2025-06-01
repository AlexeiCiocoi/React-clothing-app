import { CategoryItem } from '../index'
import styles from './Categories.module.scss'
import { ICategories } from "./Categories.props";
import { JSX } from "react";


 export const Categories = ({categories , ...props}: ICategories): JSX.Element =>{

    return(
        <div {...props} className={styles.categoriesContainer }>
            {categories.map(category => (
                <CategoryItem key={category._id} {...category} />
            ))}
            <div></div>
        </div>
    )
}
