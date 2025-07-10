
import { collection, getDocs, query, writeBatch, doc, setDoc } from "@firebase/firestore";
import { db } from "./firebase.config";
import { TCategoriesMap } from "@/features/categories/categories.types";

import { v4 as uuidv4 } from 'uuid';
import { BaseResponse } from "@/types/api.types";
import { IOrder } from "@/types/order.types";
import { handleFirebaseError } from "@/utils/firebase-error/handleFirebaseError";

export const getCategoriesAndDocumets = async (): Promise<TCategoriesMap> =>{
  const collectionRef = collection(db,'categories')

  const q = query(collectionRef);

  
  const querySnapshot = await getDocs(q);
  
  const categoryMap = querySnapshot.docs.reduce((acc: TCategoriesMap,docSnapshot) => {
    const { title , items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{} as TCategoriesMap)
   return categoryMap;
}


export const addOrderService = async (
  userId: string,
  order: IOrder
): Promise<BaseResponse<IOrder & {id: string}>> => {

  const orderId = uuidv4();
  try {
    const orderRef = doc(db, 'orders',userId, 'orders',orderId);
    await setDoc(orderRef, order);
    return {
      success: true,
      data: { ...order, id: orderId }
    };

  } catch (error: any) {
    const fireBaseError = handleFirebaseError(error);
    return {
      success: false,
      error: {
        code: fireBaseError.error.code,
        message: fireBaseError.error.message,
      }
    }
  }
 

}




// added collections to DB once
// export const addCollectionAndDocuments = async(collectionKey: string , objectsToAdd: any[]) => {
//   const collectionRef = collection(db,collectionKey);
//   const batch = writeBatch(db);
//   objectsToAdd.forEach((obj)=>{
//     const docRef = doc(collectionRef , obj.title.toLowerCase())
//     batch.set(docRef,obj);
//   })

//   await batch.commit();
// }