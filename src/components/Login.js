import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Home from "./Home";
import { Register } from "./Register";
import './login.css'
import {useNavigate } from 'react-router-dom';
import { apiHelper } from "../services/apiHelper";
import { getExpense, getUserLogin } from "../services/UserService";
import axios from "axios";

  
export const Login = () => {

    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(true);
    const [loginData, setLoginData] = useState({
        
    })

    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/home",{replace: true})
        }
    },[])
 
    const handleSubmit = async () => {
        console.log("innnnn")
        await getUserLogin(loginData)
        .then((res) => {
        localStorage.setItem("token", res.accessToken);
        console.log(res.accessToken);
        navigate("/home")
    })
        
    

    };

    // let token = localStorage.getItem('token')
    // console.log("tojkennnn",token)
    // if(token){
    //     navigate("/home");
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post("http://localhost:8080/users/login", loginData);
    //     navigate("/home");
    //   };
      


    function handleChange(event){
        const { name , value } = event.target;
        setLoginData(() =>({
          ...loginData,
          [name] : value,
        })); 
      }
      

    return(
    <div className="auth-form-container">
        <header>
            <nav>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmaOELs47PBFQYpgMv95rKwzz6njKGsK3Btqkpzb0W_y909kg8mPg07McDYiHXdQR600&usqp=CAU" alt="" width="150px" />
           </nav>
        </header>
        <h2>Login</h2>
        <div className="login-form" style={{height:'50px'}} >
            <label htmlFor="email">Email</label>
            <input value={loginData.username} onChange={(e) => handleChange(e)} type="email" placeholder="" id="email" name="username" />
            <label htmlFor="password">Password</label>
            <input value={loginData.password} onChange={(e) => handleChange(e)} type="password" placeholder="" id="password" name="password" />
            <br /> 
            {/* <Link to="/home" component={<Home/>} token={token}> */}
            <button onClick={handleSubmit}>Login</button> 
            {/* </Link>     */}
        </div>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />

        <Link to="/register" component={<Register/>}>
        <button style={{bottom:"-110px" }}href="/" className="link-btn">Don't have an account? Register here</button>
        </Link>
    </div>
    )
}
