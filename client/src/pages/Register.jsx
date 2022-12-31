import React from 'react'
import { Link } from 'react-router-dom'
import authImage from '../assets/undraw_personal_email_re_4lx7.svg'
const Register = () => {
  return (

    
    <div className="auth-container">

<div className="auth-img">

<img src={authImage} alt="" />
</div>

  <div className="auth">
  
  <h1>Register</h1>

  <form action="">
  <input required type="text"  placeholder='username'/>
  <input required type="email"  placeholder='email'/>

  <input required type="password" placeholder='password' />

  <button className="btn">Login</button>
  <div className="text">
  <p>This is an error</p>
  <span>Don't you have an account? <Link to="/login">Login</Link></span>
  </div>
  </form>
  </div>
  </div>
  )
}

export default Register