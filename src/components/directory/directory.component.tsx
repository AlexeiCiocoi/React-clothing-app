import { DirectoryItem } from '../index'
import styles from './directory.module.scss'

import { JSX } from "react";

const categories = [
    {
      _id: 1,
      title: 'hats',
      imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: "shop/hats"
    },
    {
      _id: 2,
      title: 'jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: "shop/jackets"
    },
    {
      _id: 3,
      title: 'sneakers',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: "shop/sneakers"
    },
    {
      _id: 4,
      title: 'womens',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: "shop/womens"
    },
    {
      _id: 5,
      title: 'mens',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: "shop/mens"
    },
  ];

 export const Directory = (): JSX.Element =>{
  
    return(
        <div className={styles.categoriesContainer }>
            {categories.map(category => (
                <DirectoryItem key={category._id} {...category} />
            ))}
            <div></div>
        </div>
    )
} 
