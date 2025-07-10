import { JSX } from "react";
import { ICategoryItem } from "./directory-item.props";
import styles from './directory-item.module.scss'
import { useNavigate } from "react-router";



 export const DirectoryItem = ({title ,imgUrl , route }:ICategoryItem): JSX.Element =>{

    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    

    return(
        <div style={{backgroundImage: `url(${imgUrl})`}} onClick={onNavigateHandler} className={styles.categoryContainer}>
            {/* <img className={styles.backgroundImage} src={imgUrl}/> */}
            <div className={styles.categoryBodyContainer}>
                <h2>{title}</h2>
                <p>Shop Now</p>
        </div>
    </div>
    )
}

