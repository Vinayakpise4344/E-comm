import React, { useState } from 'react'
import Vk from "../Assets/download121.jpeg"

import "../HeaderSEC/Head.css"
import { Link } from 'react-router-dom';



const Header = () => {
  const[menu,setMenu] = useState();
  return (
    <div className='home'>
    <div className='main'>
       <div className='logo1'>

        <img src={Vk} />
       </div>
       <div className='navbar'>
          <ul>
            <li onClick={()=>{setMenu("Home")}}><Link to="/">Home</Link>{menu ==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link to='/men'>Men</Link>{menu ==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link to="/women">Women</Link>{menu ==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link to="/kids">Kids</Link>{menu ==="Kids"?<hr/>:<></>}</li>

            </ul>
        </div>
        <div className='right'>
         
            <button>
          <Link to="/login">Login</Link> 
            </button>
            <li>
           <Link to="/Cart"><i class="ri-shopping-cart-line"></i></Link> 
            </li>
         
        </div>
        </div>
       
      
       
        </div>
        

  )
}

export default Header