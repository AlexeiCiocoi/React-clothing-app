import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'

import App from './App';
import { UserProvider }  from './context/user/user.context' 
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './context/product/product.context';
import { CartProvider } from './context/cart/cart.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
