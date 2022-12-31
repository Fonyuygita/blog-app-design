import React from 'react'
import { Link } from 'react-router-dom'
import authImage from '../assets/undraw_personal_email_re_4lx7.svg'

const Login = () => {
  return (
<div className="auth-container">

<div className="auth-img">

<img src={authImage} alt="" />
</div>

  <div className="auth">
  
  <h1>Login</h1>

  <form action="">
  <input type="text"  placeholder='username'/>
  <input type="password" placeholder='password' />

  <button className="btn">Login</button>
  <div className="text">
  <p>This is an error</p>
  <span>Don't you have an account? <Link to="/register">Register</Link></span>
  </div>
  

  </form>
  </div>
  </div>
  )
}

export default Login