import React, { useEffect, useState } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import axios from "axios";

export const Register = () => {
    
  const [registerData, setRegisterData] = useState({
    // name:"",
    // email:"",
    // password:""
  });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/users", registerData);
    }
    
    function handleChange(event){
      const {name, value} = event.target;
      setRegisterData(() =>({
        ...registerData,
        [name]:value,
      }));
    }
    console.log(registerData)
  

    return(

        <div className="auth-form-container">
          <header>
            <nav>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmaOELs47PBFQYpgMv95rKwzz6njKGsK3Btqkpzb0W_y909kg8mPg07McDYiHXdQR600&usqp=CAU" alt="" width="150px" />
           </nav>
          </header>
          <h2>Register</h2>  
          <div className="register-form">
            <label htmlFor="name">Full name</label>
            <input value={registerData.name} onChange={(e) => handleChange(e)} name="name" placeholder="   " />
            <label htmlFor="email">Email</label>
            <input value={registerData.email} onChange={(e) => handleChange(e)} type="email" placeholder="  "  name="email" />
            <label htmlFor="password">Password</label>
            <input value={registerData.password} onChange={(e)=> handleChange(e)} type="password" placeholder="  " name="password" /> 
            <br />
            {/* <Link to="/home" component={<Home/>}> */}
            <button onClick={handleSubmit}>Register</button> 
            {/* </Link>       */}
          </div>
          <Link to="/" component={<Login/>}>
          <button href="/" className="link-btn">Already have an account? Login here</button>
          </Link>
        </div>

    )
}
