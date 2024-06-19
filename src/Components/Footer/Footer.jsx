import React from 'react'
import './footer.css'
import Vk from "../Assets/download121.jpeg"
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Vk}/>
            
        </div>
        <ul className='footer-links'>
           <li>Company</li>
           <li>Products</li>
           <li>Office</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src= {instagram_icon}/>

            </div>
            <div className="footer-icons-container">
                <img src= {whatsapp_icon}/>
                
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2023 -All Right Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer