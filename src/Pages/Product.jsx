import React, { useContext } from 'react'
import { ShopContent } from '../Components/Content/ShopContent';
import { useParams } from 'react-router-dom';
import Breakcrums from '../Components/Breakcrums/Breakcrums';
import Productdis from '../Components/ProductDis/Productdis';
import Header from '../Components/Footer/Header';

const Product = () => {
    const {all_product} = useContext(ShopContent);
    const {productId} = useParams(); //find id of product and assign variables
    const product = all_product.find((e)=> e.id === Number(productId) );
        
   
    return (
    <div className='Break'>
       <Header/>
        <Breakcrums product={product}/>
       <Productdis product ={product}/>
        </div>
  )
}

export default Product