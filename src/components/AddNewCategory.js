import React, { useState } from 'react';
import ReactModal from 'react-modal';
// import './AddNewCategory.css';


function AddNewCategory() {
    const [isOpen, setIsOpen] = useState();
    const [formData, setFormData] = useState({
      Id : "",
      Category: "",

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
        
          <button class="btn btn-primary add"  onClick={() => setIsOpen(true) } >
            Add New Category
          </button>
        
        
  
   
        {isOpen && (
         <div>
          <div style={{padding:'0px'}}>
            <ReactModal isOpen={isOpen}>
              <form onSubmit={handleSubmit} class = "updateForm" >
                <div class="canceldiv" style={{width:'20px', position:'relative'}}>
                <button onClick={handleChange} >
                  <img 
                    class="image"
                    style={{position:'absolute', width:'30px', height:'30px',bottom:'45px',left:'885px'}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSlgsUMYCSs9Do1Z38RYPxOxVSpTR6BCN2Q&usqp=CAU" 
                    alt="ButtonImage"
                  />
                </button>
                </div>
                <div class="form-group">
                <label>Id:</label >
                  <input 
                    class="form-control"
                    type="text"
                    name="Id"
                    placeholder= 'Enter Id'
                    value={formData.Id}
                    onChange={handleChange}
                    />
                </div>
                <div class="form-group">
                <label >Category</label> 
                  <input
                    class="form-control"
                    type="text"
                    name="Category"
                    placeholder= 'Enter Category'
                    value={formData.Category}
                    onChange={handleChange}
                  />
                
                </div>
                <div class="btn">
                <button style={{marginLeft:-2,marginTop:10, backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)" }} class = "btn btn-primary submit"  type="submit">Save</button>
                <button style={{marginLeft:15, marginTop:10, backgroundImage: "linear-gradient(50deg, rgb(161, 159, 159), rgba(0, 0, 0, 0.711))"}} class = "btn btn-secondary cancel" type="cancel">Cancel</button>
                </div>
              </form> 
            </ReactModal>
          </div>
          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
         </div>
        )}
      </>
    );
  }
   
  export default AddNewCategory;