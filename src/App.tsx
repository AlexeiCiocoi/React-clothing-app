
import { Routes , Route } from 'react-router-dom'

import { Navigation,Home, Authentication} from './routes/index'

import { Checkout } from './routes/checkout/checkout.component';
import { useEffect } from 'react';

import { initializeAuthListener } from '@/services/firebase/auth.firebase';

// import GlobalNotification from '../features/notifications/components/notifications.component';

import { useAppDispatch } from './store/hooks';
import { Shop } from './routes/shop/shop.component';
import GlobalNotification from './features/notifications/components/notifications.component';




function App() {
const dispatch = useAppDispatch();

   useEffect(()=>{
      
        const unsubscribe = initializeAuthListener(dispatch)
   
    return () => {
      unsubscribe()
    }
  
    
  },[dispatch])

  return (
    <>
    <GlobalNotification />
    <Routes >
        <Route path='/' element={<Navigation />} >
          <Route index element={ <Home />} />
          <Route path='shop/*' element={<Shop />}  />
          <Route path='auth' element={<Authentication />}  />
          <Route path='checkout' element={<Checkout />}  />
          
        </Route>
    </Routes>
   </>
     
  );
}

export default App;
