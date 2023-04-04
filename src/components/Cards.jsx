import React,{Component} from "react";
import AddNewExpense from "./AddNewExpense";
import AppNav from "./AppNav";

import Carddesign from "./Carddesign";
// import './Card-style.css';
import { Link } from "react-router-dom";
import AddNewCategory from "./AddNewCategory";






const Cards = () =>{
    
   
    
        
        
        return(
            <div>
            <AppNav />
            <div className="container-fluid d-flex jutify-content-center" style={{display:'flex',flexDirection:'column'}} >
                <div className="row" style={{paddingTop:'4rem',paddingLeft:'8.5rem'}} >
                    <div className="col-md-4" style={{width:'30%'}}>
                        <Carddesign  
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPawrvRmjZtRbNq7LkWYplIvJ1h5trO4p2nLGfPbSVsnyeTA4RTKTKZ6XgDXnT2FfjVzs4DCPg9EY&usqp=CAU&ec=48665698" 
                            title="Add New Expense" 
                            description="Here you can add your new Expense" 
                            Add={<Link to='/AddNewExpense' Component={<AddNewExpense/>} style={{backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)"}}>
                                <button class = "btn btn-primary submit">Add</button></Link>}
                        />
                        {/* <Link to='/AddNewExpense' Component={<AddNewExpense/>}>
                            <Carddesign Add="Add"/>
                        </Link>  */}
                    </div>
                    <div className="col-md-4" style={{width:'30%'}}>
                        <Carddesign  
                            img="data:image/jpeg;base64,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" 
                            title="Add New Category" 
                            description="Here you can add a new category" 
                            Add={<Link to='/AddNewCategory' Component={<AddNewCategory/>} style={{backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)"}}>
                                <button className='btn btn-primary submit'>Add</button></Link>}
                        />
                    </div>
                    <div className="col-md-4" style={{width:'30%'}} >
                        <Carddesign 
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwauBENquxIHcsAvR5kYNuV8vLBxSpeE2Us_wVbQ5l0w&usqp=CAU&ec=48665698" 
                            title="Multiple expenses" 
                            description="Here you can add Recurring Expenses" Add='view' 
                        />
                    </div>
                </div>
            </div>
            </div>
        )
    
    
}


export default Cards;