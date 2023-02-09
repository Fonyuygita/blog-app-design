import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authImage from "../assets/undraw_personal_email_re_4lx7.svg";
import { useState } from "react";
import axios from "axios";
const Register = () => {
// send user to the database
const [inputs, setInputs]=useState({
  username:"",
  email:"",
  password:""
})


// error state

const [error, setError]=useState(null);


// navigate state


const navigate=useNavigate();

// handleChange, changes whenever we change our inputs
const handleChange=(e)=>{
  setInputs(prev=>({...prev, [e.target.name] : e.target.value}))
}
console.log(inputs)


// handleSubmit, to handle and

const handleSubmit= async e=>{
  e.preventDefault();

  try {
    // 

    await axios.post("/auth/register", inputs);
    // console.log(res)
    navigate("/login");
  } catch (err) {
//  console.log(err)   
// catch error and show it to the user

setError(err.response.data);
  }

}

  return (
    <div className="auth-container">
      <div className="auth-img">
        <img src={authImage} alt="" />
      </div>

      <div className="auth">
        <h1>Register</h1>

        <form action="">
          <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
          <input required type="email" placeholder="email" name="email" onChange={handleChange}/>

          <input required type="password" placeholder="password" name="password" onChange={handleChange}/>

          <button className="btn" onClick={handleSubmit}>Register</button>
          <div className="text">
            {error && <p>{error}</p> }
            <span>
              Don't you have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
