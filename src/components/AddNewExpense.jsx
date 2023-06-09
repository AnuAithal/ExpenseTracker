import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
// import './AddNewExpense.css';
import AddNewCategory from './AddNewCategory';
import {Link, useNavigate } from 'react-router-dom';
import AppNav from './AppNav';
import Cards from './Cards';
import axios from 'axios';
import Select from 'react-select';
// import MultiselectDropDown from '../MultiselectDropDown';
import { addExpense, getExpense } from '../services/UserService';




function AddNewExpense() {

    const navigate = useNavigate();

    const [categories, setCategories]=useState([]);

    const [isOpen, setIsOpen] = useState("Add");
    const [formData, setFormData] = useState({
      expenseDate: "",
      description: "",
      amount: "",
      categoryId: ""
    });
    
    

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   await axios.post("http://localhost:8080/expenses", formData);
    //   setIsOpen(false);
    //   navigate("/Cards");
    // };

    const handleSubmit = async () => {
      console.log("innnnn")
      await addExpense(formData)
      .then((res) => {
      // localStorage.setItem("token", res.accessToken);

      
      getExpense();
      navigate("/home")
  })
}

    const modalstyles={
      content: {
        width:'550px',
        margin:'auto',
      }
    }
  
      

    function handleChange(event){
      const { name , value } = event.target;
      setFormData(() =>({
        ...formData,
        [name] : value,
      })); 
    }
    console.log(formData);

    const fetchCatAPI = async() => {
        const responseCat = await axios.get("http://localhost:8080/categories");
        setCategories(responseCat.data);         
    }

    useEffect( ()=> {
        fetchCatAPI();
    }, [categories.id])


    return (
      <>
   

          {/* <button class="btn btn-primary add" style={{marginTop:150}} onClick={() => setIsOpen(true) } >
            Add New Expense
          </button> */}
        
   
        {isOpen && (
         <div>
          <div>
           <ReactModal isOpen={isOpen} style={modalstyles}>
              <div  class = "updateForm">
                <div class="form-group" style={{position:'relative'}}>
                <Link to='/Cards' component={<Cards/>}>
                <button onClick={() => setIsOpen(false)} href="/Cards" >
                  <img 
                    style={{position:'absolute', width:'30px', height:'30px',bottom:'65px',marginLeft:'350px'}}
                    class="image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSlgsUMYCSs9Do1Z38RYPxOxVSpTR6BCN2Q&usqp=CAU" 
                    alt="ButtonImage"
                  />
                </button>
                </Link>
                </div>
                <div class="form-group">
                <label>Title:</label >
                  <input 
                    class="form-control"
                    type="text"
                    name="description"
                    placeholder= 'Enter Title'
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                    />
                </div>


                <div class="form-group">
                <label>Category:</label>
                <select class="form-select" name="categoryId" aria-label="Default select example"
                 value={formData.categoryId}
                 onChange={(e) => handleChange(e)}
                >
                  <option selected>Select a Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ) )}
                </select>

                </div>
                
                <div class="form-group">
                <label>Amount:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="amount"
                    placeholder= 'Enter amount'
                    value={formData.amount}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div class="form-group">
                <label>Date:</label> 
                  <input 
                    class="form-control"
                    type="datetime-local"
                    name="expenseDate"
                    value={formData.expenseDate}
                    onChange={(e) => handleChange(e)}
                  />
                
                </div>
                <div class="btn">
                {/* <Link to='/Cards' component={<Cards/>}> */}
                <button onClick={handleSubmit} style={{marginLeft:-2, marginTop:10, backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)"}} class = "btn btn-primary updatebutton" type="submit">Save</button>
                {/* </Link> */}
                <Link to='/Cards' component={<Cards/>}>
                <button onClick={()=> setIsOpen(false)} style={{marginLeft:15, marginTop:10, backgroundImage: "linear-gradient(50deg, rgb(161, 159, 159), rgba(0, 0, 0, 0.711))"}} class = "btn btn-secondary cancel" type="cancel">Cancel</button>
                </Link>
                </div>
              </div> 
            </ReactModal>
          </div>
  {/*         <button onClick={() => setIsOpen(false)}>
            Close
          </button> */}
         </div>
        )}


    
        {/* <AddNewCategory/> */}
      </>
    );
  }
   
  export default AddNewExpense;