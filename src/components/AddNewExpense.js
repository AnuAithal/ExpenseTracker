import React, { useState } from 'react';
import ReactModal from 'react-modal';
// import './AddNewExpense.css';
import AddNewCategory from './AddNewCategory';
import {useNavigate } from 'react-router-dom';
import AppNav from './AppNav';
import MultiselectDropDown from '../MultiselectDropDown';



function AddNewExpense() {

    

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState();
    const [formData, setFormData] = useState({
      Title: "",
      Category: "",
      Amount: "",
      Date: "",

    });
    
    function handleSubmit(event){
      event.predefault();
      setIsOpen(false);

    }

    function handleChange(event){
      const { name , value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name] : value,
      }));
  
    }
    

    return (
      <>
        
        
        <AppNav/>


          <button class="btn btn-primary add" style={{marginTop:150}} onClick={() => setIsOpen(true) } >
            Add New Expense
          </button>
        
        
  
   
        {isOpen && (
         <div>
          <div>
            <ReactModal isOpen={isOpen}>
              <form onSubmit={handleSubmit} class = "updateForm">
                <div class="form-group" style={{position:'absolute'}}>
                <button onClick={() => setIsOpen(false)} href="/" style={{position:"absolute"}}>
                  <img 
                    style={{position:'relative', width:'20px', height:'20px'}}
                    class="image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSlgsUMYCSs9Do1Z38RYPxOxVSpTR6BCN2Q&usqp=CAU" 
                    alt="ButtonImage"
                  />
                </button>
                </div>
                <div class="form-group">
                <label>Title:</label >
                  <input 
                    class="form-control"
                    type="text"
                    name="Title"
                    placeholder= 'Enter Title'
                    value={formData.Title}
                    onChange={handleChange}
                    />
                </div>
                <div class="form-group">
                <label>Category:</label>


                  <MultiselectDropDown />

                  
                </div>
                <div class="form-group">
                <label>Amount:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="Amount"
                    placeholder= 'Enter amount'
                    value={formData.Amount}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                <label>Date:</label> 
                  <input 
                    class="form-control"
                    type="date"
                    name="date"
                    value={formData.Date}
                    onChange={handleChange}
                  />
                
                </div>
                <div class="btn">
                <button style={{marginLeft:-2, marginTop:10, backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)"}} class = "btn btn-primary submit" type="submit">Save</button>
                <button onClick={()=> {navigate("/addNewExpense")}} style={{marginLeft:15, marginTop:10, backgroundImage: "linear-gradient(50deg, rgb(161, 159, 159), rgba(0, 0, 0, 0.711))"}} class = "btn btn-secondary cancel" type="cancel">Cancel</button>
                </div>
              </form> 
            </ReactModal>
          </div>
          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
         </div>
        )}


    
        <AddNewCategory/>
      </>
    );
  }
   
  export default AddNewExpense;