import React from 'react'
import './breakcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breakcrums = (props) => {
    const {product} = props;
  return (
    <div className='Breakcrums'> 
      Home <img src={arrow_icon}/>Shop<img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name} 
    </div>
  )
}

export default Breakcrums