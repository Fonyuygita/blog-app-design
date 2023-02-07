import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authImage from '../assets/undraw_personal_email_re_4lx7.svg'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

  // set input state

  const [inputs, setInputs]=useState({
    username:"",
    password:""
  });


  // create error state
const [error, setError]=useState(null);


// set navigation state

const navigate=useNavigate();

// now create the handlesubmit btn to submit this stuffs into our state which is then pass via a database to our api end point

const handleChange=e=>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}
console.log(inputs);

// now let us create our handleSUBMIT functionality to handle subnmit when we want to login

const handleSubmit= async e=>{
  e.preventDefault();
try {
  // post our result to our api end point
  const res=await axios.post("/auth/login", inputs);
  navigate("/");
  

} catch (err) {
  // catch error and show it to the user
  setError(err.response.date);
  
}
  
}

  return (
<div className="auth-container">

<div className="auth-img">

<img src={authImage} alt="" />
</div>

  <div className="auth">
  
  <h1>Login</h1>

  <form action="">
  <input type="text"  placeholder='username' name='username' onChange={handleChange} />
  <input type="password" placeholder='password'name='password' onChange={handleChange} />

  <button className="btn">Login</button>
  <div className="text">
 {error && <p>{error}</p>}
  <span>Don't you have an account? <Link to="/register">Register</Link></span>
  </div>
  

  </form>
  </div>
  </div>
  )
}

export default Login