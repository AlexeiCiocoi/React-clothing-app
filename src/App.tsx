import React from 'react';
import { Categories } from './components';


const categories = [
    {
      _id: 1,
      title: 'hats',
      imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      _id: 2,
      title: 'jackets',
      imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      _id: 3,
      title: 'sneakers',
      imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      _id: 4,
      title: 'womens',
      imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      _id: 5,
      title: 'mens',
      imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];


function App() {
  return (
    <div>
        <Categories categories={categories}/>
    </div>
  );
}

export default App;
