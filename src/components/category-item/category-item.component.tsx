import { JSX } from "react";
import { ICategoryItem } from "./category-item.props";
import styles from './category-item.module.scss'



 export const CategoryItem = ({title ,imgUrl }:ICategoryItem): JSX.Element =>{

    return(
        <div className={styles.categoryContainer}>
            <img className={styles.backgroundImage} src={imgUrl}/>
            <div className={styles.categoryBodyContainer}>
                <h2>title</h2>
                <p>Shop Now</p>
        </div>
    </div>
    )
}

