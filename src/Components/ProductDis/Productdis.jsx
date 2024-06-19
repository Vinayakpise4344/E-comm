import React, { useContext } from 'react'
import './dis.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContent } from '../Content/ShopContent';

const Productdis = (props) => {
    const {product} =props;
    const {addToCart} = useContext(ShopContent)
  return (
    <div className='Productdis'>
      <div className="productdis-left">
        <div className="productdis-img-list">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
        </div>
        <div className="productdis-img">
          <img  className="productdis-main-img"   src={product.image}/>
        </div>
      </div>
      <div className="divproductdis-right">
        <h1>{product.name}</h1>
        <div className="divproductdis-right-star">
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_icon}/>
            <img src={star_dull_icon}/>
            <p>122</p>
        </div>
        <div className="divproductdis-right-description">
          <div className="divdivproductdis-right-price-old">${product.old_price}</div>
           <div className="divdivproductdis-right-price-new">${product.new_price}</div>
            <div className="productdis-right-description">
              Lorem ipsum, 
            </div>
            <div className="productdis-right-size">
              <h1>Select Size</h1>
              <div className="productdis-right-size1">
               <div>S</div>
               <div>M</div>
               <div>L</div>
               <div>XL</div>
               <div>XXL</div>
              </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Productdis