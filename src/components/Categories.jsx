import React,{useState, useEffect} from 'react'
import axios from 'axios';
import AppNav from './AppNav';


const Categories = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);

const fetchAPI = async() => {
    setLoading(true);
    
    const response = await axios.get("http://localhost:8080/api/categories");
    setCategory(response.data);

    setLoading(false);
}

useEffect( ()=> {
    fetchAPI();
}, [])

  return (
    <div>
      

      <h4>Categories</h4>
      {
        loading ? ( <p>Loading...</p> ) : (category.map( categor => <p key={categor.id}>{categor.name}</p> ))
      }
    </div>
  )
}

export default Categories
