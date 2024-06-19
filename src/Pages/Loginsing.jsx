import React from 'react'
import './CSS/Login.css'
const Loginsing = () => {
  return (
   <div className="Loginsing">
    <div className="loginsing-container">
        <h1>Sign Up</h1>
        <div className="loginsing-fields">
            <input type='text' placeholder="Your Name"/><br/>
            <input type="email" placeholder='Enter Email Address'/><br/>
            <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsing-login'>Already have an account? <span>Login Here</span></p>
        <div className="loginsing-login">
            <input type='checkbox' name='' id='' />
            <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
    </div>
   </div>
  )
}

export default Loginsing