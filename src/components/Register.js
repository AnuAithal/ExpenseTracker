import React, { useState } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import { Login } from "./Login";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

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
          <h2>Register</h2>  
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="   " />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="  " id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="  " id="password" name="password" /> 
            <br />
            <Link to="/home" component={<Home/>}>
            <button type="submit">SignUp</button> 
            </Link>      
          </form>
          <Link to="/" component={<Login/>}>
          <button href="/" className="link-btn">Already have an account? Login here</button>
          </Link>
        </div>

    )
}
