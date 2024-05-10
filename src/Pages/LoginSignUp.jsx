import React from 'react'
import "./CSS/LoginSignUp.css"
const loginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-field'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Adress'/>
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Alrady have an account ? <span>Login here</span>
        </p>
        <div className='loginsignup-agreed'>
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to use the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default loginSignup