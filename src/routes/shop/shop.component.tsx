import { Route , Routes } from 'react-router-dom'
import { CategoriesPreview , Category} from '../index'

export const Shop = () =>{
    
    return (
     <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
     </Routes>
        
    )


}