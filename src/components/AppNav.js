import React, { useState } from 'react'
import { Nav, NavItem, NavLink} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const AppNav = () => {

    const navigate=useNavigate();
    const [activeTab, setActiveTab] = useState('1');

    // function handleToggle(){
    //     navigate("/Cards");
        
    // }

    function doLogout(){
        localStorage.clear();
        navigate("/")
    }

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
                    <li><a class="dropdown-item" onClick={()=>doLogout()}>Log out</a></li>
                </ul>
            </div>

        </nav>

        {/* <ul class="nav nav-tabs "  >
            <li class="nav-item">
                <a className={activeTab === '1' ? 'nav-link active' : 'nav-link'} onClick={()=> setActiveTab('1')} aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item" onClick={()=> navigate("/Cards")}>
                <a className={activeTab === '2' ? 'nav-link active' : 'nav-link'}  onClick={()=> setActiveTab('2')} >Add New</a>
            </li>
        </ul> */}
        
        <div>
            <Nav tabs className="nav nav-tabs" style={{backgroundColor:'white'}}>
                <NavItem className="nav-item">
                <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')} href="/home">
                    Home
                </NavLink>
                </NavItem>
                <NavItem style={{cursor: 'pointer'}} className="nav-item" onClick={()=> navigate("/Cards") } >
                <NavLink className={activeTab == '2' ? 'active' : ''} onClick={()=> setActiveTab('2')} >
                    Add New
                </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
  )
}

export default AppNav
