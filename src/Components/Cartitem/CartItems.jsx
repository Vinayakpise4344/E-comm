import React, { useContext } from 'react'
import { ShopContent } from '../Content/ShopContent'
import remove_icon from '../Assets/cart_cross_icon.png'
import './cart.css'
import Header from '../Footer/Header'
const CartItems = () => {
  const {all_product,cartItems,removeToCart}=useContext(ShopContent);
  return (
    <div>
      <Header/>
    <div className='cartitem'>

       <div className="cartitems-format-main">
        <p>Products</p>
         <p>Title</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>total</p>
        <p>Remove</p>
       </div>
       <hr/>
     {all_product.map((e)=>{ 
       if(cartItems[e.id]>0){
         return <div>
               <div className="cartitem-format cartitems-format-main ">
             <img src={e.image} className='carticon-product'/>
             <p>{e.name}</p>
            <p >${e.new_price}</p>
              <button className='cartitgem-quantity'>{cartItems[e.id]}</button>
             <p>{e.new_price*cartItems[e.id]}</p>
             <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeToCart(e.id)}}/>
           </div>         
           </div>
}})}
           </div>
           </div> 
  )}
    
    

  
 export default CartItems
   
  
  