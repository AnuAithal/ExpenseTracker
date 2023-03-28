import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


const UpdateExpense = () => {

  const navigate = useNavigate();

    const loc = useLocation();
    const data = loc.state
    
    //console.log(data);

    const [item, setItem ] = useState({
      title:data.description,
      category:data.category.name,
      amount:data.amount,
      date:data.expenseDate
  })

   //console.log(item);


    function handleChange(event){
      const { name , value } = event.target;
      setItem({
        [name] : value,
      });
  
    }


    //UPDATE EXPENSE
    function saveExpense(){
      let exp=item;

      axios.put(`https://localhost:8080/api/expenses/${data.id}`, {
        exp
      })

      // fetch(`http://localhost:8080/api/expenses/${data.id}`,{
      //       method:"PUT",
      //       //mode: "cors"
      //       headers : {
      //           'Accept': 'application/json',
      //           'Content-Type': 'application/json'
      //       },
      //       body:JSON.stringify(exp)
      //   }).then((result)=>{
      //       result.json().then((resp)=>{
      //           console.warn(resp)
      //           // fetchAPI()
      //       })
      //   })  

      navigate("/home");
    }


  return (

    <div>
      <form className='updateForm'>
        <div class="form-group">
            <label>Title:</label>
            <input type="text" value={item.title} onChange={handleChange}  class="form-control" id="title" placeholder="Enter title"/>
        </div>
        <div class="form-group">
            <label>Category:</label>
            <input type="text" value={item.category} onChange={handleChange} class="form-control" id="category" placeholder="Category"/>
        </div>
        <div class="form-group">
            <label>Amount:</label>
            <input type="number" value={item.amount} onChange={handleChange} class="form-control" id="amount" placeholder="Enter Amount"/>
        </div>
        <div class="form-group">
            <label>Date:</label>
            <input type="date" value={item.date} onChange={handleChange} class="form-control" id="date"/>
        </div>
        
        <button onClick={saveExpense} style={{marginLeft:10, marginTop:10, backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)"}} type="submit" class="btn btn-primary submit">Submit</button>
        <button onClick={()=> {navigate("/home")}} style={{marginLeft:10, marginTop:10, backgroundImage: "linear-gradient(50deg, rgb(161, 159, 159), rgba(0, 0, 0, 0.711))"}} type="submit"  class="btn btn-secondary cancel">Cancel</button>
        </form>
    </div>
  )
}

export default UpdateExpense
