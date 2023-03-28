import React from 'react'


const AppNav = () => {
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

        <ul class="nav nav-tabs "  >
            <li class="nav-item" >
                <a class="nav-link active"  aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="/addNewExpense" >Add Expense</a>
            </li>
        </ul>
        
    </div>
  )
}

export default AppNav
