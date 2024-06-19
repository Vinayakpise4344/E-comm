import React,{createContext} from "react";
import all_product from '../Assets/all_product';
import { useState } from "react";

export const ShopContent = createContext();
const getDefaultCart=()=>{
     let cart={};
      for(let index=0;index<all_product.length;index++){
          cart[index]=0;
      }
   return cart;
 }
const ShopContentProvider =(props)=>{
    const[cartItems,setcartItems] = useState(getDefaultCart());
    

    const addToCart=(itemid)=>{
        setcartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartItems)
    }
    const removeToCart=(itemid)=>{
        setcartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const ContextValue = {all_product,cartItems,addToCart,removeToCart};
    return(
        <ShopContent.Provider value={ContextValue}>
            {props.children}
        </ShopContent.Provider>
    )
}
export default ShopContentProvider;
