import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppNav from "./AppNav";
import { Link } from "react-router-dom";
import AddNewExpense from "./AddNewExpense";
import AddNewCategory from "./AddNewCategory";
// import './Card-style.css';       



const Carddesign = Props =>{

    
    return(
        
        <div className="card text-center" >
            <div className="overflow" >
                <img src={Props.img} alt="" className="imgsrc" />
            </div>
            <div className="card-body text-dark" style={{padding:'3rem'}}>
                <h4 className="card-title" style={{fontSize:'1.5rem',padding:'0.4rem 0.9rem'}}>{Props.title}</h4>
                <p className="text-body text-secondary">{Props.description}</p>
                {/* <p style={{backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)"}} className="btn btn-primary submit">{Props.Add}</p> */}
                <p>{Props.Add}</p>
                {/* <Link to='AddNewCategory' component={<AddNewCategory/>}>
                    <a href="AddNewCategory" className="btn btn-outline-success">Add</a>
                </Link>
                <Link>
                    <a href="Multiple Expenses" className="btn btn-outline-success">Add</a>
                </Link> */}
            </div>
        </div>

    )
}

export default Carddesign;