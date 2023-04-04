import React, { useState } from 'react'



const AppNav = () => {

    const [isActive, setIsActive] = useState("true");

    function handleToggle(){
        setIsActive(!isActive);
    }

    // const [tab1, setTab1] = useState(true);
    // const [tab2, setTab2] = useState(false);

    // const style1 = {
    //     backgroundColor: tab1 ? "black" : "white" 
    // }
    // const style2 = {
    //     backgroundColor: tab2 ? "black" : "white" 
    // }

    // function handleTab1(){
    //     setTab1(true);
    //     setTab2(false);
    // }
    // function handleTab2(){
    //     setTab2(true);
    //     // setTab1(false);
    // }

  return (
    <div>
        <nav class="navbar bg-dark">

            <img src="../expenseLogo.png" alt="Logo" width="50" height="50"/>

            <h3 style={{color: "white", marginLeft:20}}>Expense Tracker</h3>

            <div class="dropdown-center" style={{marginLeft: "auto"}}>
                <a class="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/">Log out</a></li>
                </ul>
            </div>

        </nav>

        <ul class="nav nav-tabs " style={{backgroundColor:'white'}} >
            <li class="nav-item" >
                <a className={isActive ? "nav-link active" : "nav-link"}    onClick={handleToggle} /*onClick={handleTab1} style={style1}*/ aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
                <a className={isActive ? "nav-link active" : "nav-link"} onClick={handleToggle}  href="/Cards" >Add New</a>
            </li>
        </ul>
        
    </div>
  )
}

export default AppNav
