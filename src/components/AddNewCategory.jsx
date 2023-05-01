import React, { useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cards from './Cards';
// import './AddNewCategory.css';


function AddNewCategory() {
    const [isOpen, setIsOpen] = useState("Add");
    const [formData, setFormData] = useState({
      name: ""
    });

    const modalstyles={
      content: {
        width:'550px',
        margin:'auto',
      }
    }
    
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/categories", formData);
      setIsOpen(false);
      navigate("/Cards");
    };

    function handleChange(event){
      const { name , value } = event.target;
      setFormData(() => ({
        ...formData,
        [name] : value,
      }));
    }
    console.log(formData);

    return (
      <>
        
          {/* <button class="btn btn-primary add"  onClick={() => setIsOpen(true) } >
            Add New Category
          </button> */}
        
        
  
   
        {isOpen && (
         <div>
          <div >
            <ReactModal isOpen={isOpen} style={modalstyles}>
              <form  class = "updateForm" >
                <div class="canceldiv" style={{width:'20px', position:'relative'}}>
                <Link to='/Cards' component={<Cards/>}>
                <button onClick={() => setIsOpen(false)} href="/Cards" >
                  <img 
                    class="image"
                    style={{position:'absolute', width:'30px', height:'30px',bottom:'45px',marginLeft:'360px'}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSlgsUMYCSs9Do1Z38RYPxOxVSpTR6BCN2Q&usqp=CAU" 
                    alt="ButtonImage"
                  />
                </button>
                </Link>
                </div>
                
                <div class="form-group">
                <label >Category:</label> 
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder= 'Enter Category'
                    value={formData.name}
                    onChange={handleChange}
                  />
                
                </div>
                <div class="btn">
                <Link to='/Cards' component={<Cards/>}>
                <button onClick={handleSubmit} style={{marginLeft:-2,marginTop:10, backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)" }} class = "btn btn-primary updatebutton"  type="submit">Save</button>
                </Link>
                <Link to='/Cards' component={<Cards/>}>
                <button onClick={() => setIsOpen(false)} style={{marginLeft:15, marginTop:10, backgroundImage: "linear-gradient(50deg, rgb(161, 159, 159), rgba(0, 0, 0, 0.711))"}} class = "btn btn-secondary cancel" type="cancel">Cancel</button>
                </Link>
                </div>
              </form> 
            </ReactModal>
          </div>
          
         </div>
        )}
      </>
    );
  }
   
  export default AddNewCategory;