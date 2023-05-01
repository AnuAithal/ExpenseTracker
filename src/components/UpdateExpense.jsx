import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';



const UpdateExpense = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  // console.log(id);

  //   const loc = useLocation();
  //   const data = loc.state

    const [item, setItem ] = useState({})

    const [categories, setCategories]=useState([]);
  

  const fetchExpense = async () => {
    const result = await axios.get(`http://localhost:8080/expenses/${id}`);

      setItem(result.data)
  };

  console.log(item);

  useEffect(() => {
    fetchExpense();
    fetchCatAPI();
  }, []);
  
console.log("Item",item)

    function onInputChange(event){
      const { name , value } = event.target;
      setItem(() =>({
        ...item,
        [name] : value,
      }));

      // console.log(item);
    }

    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/expenses/${id}`, item);
      navigate("/home");
    };

    const fetchCatAPI = async() => {
        const responseCat = await axios.get("http://localhost:8080/categories");
        setCategories(responseCat.data);    
    }
    console.log(categories);


  return (

    <div>
      <form className='updateForm' onSubmit={(e) => onSubmit(e)}>
        <div class="form-group">
            <label>Title:</label>
            <input type="text" 
              value={item.description} 
              onChange={(e) => onInputChange(e)} 
              class="form-control" 
              name="description" 
              placeholder="Enter title"
            />
        </div>
        <div class="form-group">
            <label>Category:</label>
            <select class="form-select" name="categoryId" aria-label="Default select example"
            value={item?.categoryId}
            onChange={(evt)=>onInputChange(evt)}>
             {categories?.map((eachCat)=>(
              <option key={eachCat?.id} value={eachCat?.id} >{eachCat?.name}</option>
             ))}
            </select>
        </div>
        <div class="form-group">
            <label>Amount:</label>
            <input 
              type="number" 
              value={item.amount} 
              onChange={(e) => onInputChange(e)} 
              class="form-control" 
              name="amount" 
              placeholder="Enter Amount"
            />
        </div>
        <div class="form-group">
            <label>Date:</label>
            <input 
              type="datetime-local" 
              value={item.expenseDate} 
              onChange={(e) => onInputChange(e)} 
              class="form-control" 
              name="expenseDate"
              />
        </div>
        
        <button style={{marginLeft:10, marginTop:10, backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.584), rgb(53, 139, 238)"}} type="submit" class="btn btn-primary submit1">Submit</button>
        <Link to="/home" style={{marginLeft:10, marginTop:10, backgroundImage: "linear-gradient(50deg, rgb(161, 159, 159), rgba(0, 0, 0, 0.711))"}}  className="btn btn-secondary cancel">Cancel</Link>
        </form>
    </div>
  )
}

export default UpdateExpense
