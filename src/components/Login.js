import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Register } from "./Register";
import './login.css'
// import {useNavigate } from 'react-router-dom';

  
export const Login = () => {

    // const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return(
    <div className="auth-form-container">
        <header>
            <nav>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmaOELs47PBFQYpgMv95rKwzz6njKGsK3Btqkpzb0W_y909kg8mPg07McDYiHXdQR600&usqp=CAU" alt="" width="150px" />
           </nav>
        </header>
        <h2>Login</h2>
        <form className="login-form" style={{height:'50px'}} onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="  " id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="" id="password" name="password" />
            <br /> 
            <Link to="/home" component={<Home/>}>
            <button href="/home" type="submit">Login</button> 
            </Link>    
        </form>
        <Link to="/register" component={<Register/>}>
        <button href="/register" className="link-btn-register" >Don't have an account? Register here</button>
        </Link>
    </div>
    )
}
