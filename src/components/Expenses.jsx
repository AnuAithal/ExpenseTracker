import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UpdateExpense from "./UpdateExpense";
import { getExpense } from "../services/UserService";
import ConfirmBox from "./ConfirmBox";



const Expenses = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [sortOrder, setSortOrder]=useState('');
  const [data,setData] =useState([]);
  const [filteredData,setFilteredData]=useState([]);
  const [unFilter, setUnFilter] = useState([]);
  const [selectedvalue,setSelectedValue] = useState('');
  const [categories, setCategories] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const unsortOrder = [...expenses];

  // const [unsortOrder, setUnsortOrder]=useState(expenses);  

  const [open, setOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});

  // let token = localStorage.getItem('token')
  // console.log("tokkeennn",token);
  // useEffect(()=> {
  //   axios.get(`http://localhost:8080/expenses`)
  //   .then(response => {
  //   setData(response.data);
  //   setFilteredData(response.data);
  //   setUnFilter(response.data)
  //   })
  //   .catch(error => {
  //   console.error('Error fetching data:' , error);
  //   });
  //   }, []);


  useEffect(() => {
    // setLoading(true);
    // getExpense()
    //   .then((res) => {
    //     setExpenses(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    
    
    async function getExpenses(){
      await getExpense()
      .then((res) => {
          setExpenses(res);
          setUnFilter(res);
          setData(res);
          setFilteredData(res);
      })
      .catch((err) => {
      console.log("erroor login", err);
      });
    }
    getExpenses()

    // callExpenses();

  },[]);

  // const callExpenses= () =>{
  //     getExpense()
  //       .then((res) => {
  //           setExpenses(res);
  //       })
  //       .catch((err) => {
  //       console.log("erroor login", err);
  //       });
  //     }


  const handleUnsort = () => {
    setExpenses([...unsortOrder]);
    console.log(expenses);
  }

  const handleSort = (option) => {
    let sortedItems = [...expenses]; 
    
    if (option === 'Title') {
    sortedItems.sort((a, b) =>
    sortOrder === 'Title'? b.description.localeCompare(a.description) : a.description.localeCompare(b.description)
    );
    } else if (option === 'amount') {
    sortedItems.sort((a, b) =>
    sortOrder === 'amount' ? b.amount - a.amount : a.amount - b.amount
    );
    }
    // console.log(sortOrder);
    
    setExpenses(sortedItems); 
    setSortOrder(option); 
    };
   
    const fetchCatAPI = async() => {
      const responseCat = await axios.get("http://localhost:8080/categories");
      setCategories(responseCat.data); 
      }
      
      useEffect( ()=> {
      fetchCatAPI();
      }, [categories.id])
     
     
      const handleFilterChange = (event) => {
        const value = event.target.value; 
            setSelectedValue(value);
      
      if (value === " "){
      const unfilter = data.filter(item => item.categoryName === " " );
        setExpenses(unFilter);
      }
      
      else {
      const filtered = data.filter(item => item.categoryName === value); 
        setExpenses(filtered); 
      
      }
      console.log("FILTEREDDDDDD",expenses)
      
      };

  //GET EXPENSES
  // const fetchAPI = async() => {

  //     setLoading(true);
  //     // const responseExp = await axios.get("http://localhost:8080/expenses");
  //     // setExpenses(responseExp.data);
  //     // console.log(responseExp.data);

      // getExpense()
      // .then((res) => {
      //     setExpenses(res);
      //     console.log(expenses);
      //     console.log(res);
      //     console.log("sucess");
      // })

      // .catch((err) => {
      // console.log("erroor login", err);
      // });
  //     setLoading(false);

  // }


  const removeExpense = async () => {
    const responseDel = await axios.delete(`http://localhost:8080/expenses/${deleteData?.id}`);
    await getExpense()
    .then((res) => {
      setExpenses(res);
      setOpen(false);
    })
  };

  function openDelete(data){
    setOpen(true)
    setDeleteData(data)
  }

  const rows = expenses
    .filter((expense) => {
      if (searchTerm === "") {
        return expense;
      } else if (
        expense.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return expense;
      } else if (
        expense.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return expense;
      }
    })
    .map((expense, index) => ( 
      <tr>
        <td>{expense.description}</td>
        <td>{expense.categoryName}</td>
        <td>₹{expense.amount}</td>
        <td>{new Date(expense.expenseDate).toLocaleDateString('en-GB')}</td>
        <td style={{ gap: 50 }}>
          <button
            type="button"
            class="btn btn-danger btn-sm deletebutton"
            onClick={() => openDelete(expense)}
          >
            Delete
          </button>
          <Link
            className="btn btn-primary btn-sm updatebutton"
            to={`/updateExpense/${expense.id}`}
          >
            Update
          </Link>
        </td>
        {/* "btn btn-primary btn-sm updatebutton" */}
      </tr>
    ));

  return (
    <div>
      <div class="container">
      <div>
      <select value={selectedvalue} onChange={handleFilterChange}>
      <option value=" ">All</option>
        {categories.map(item => (
          <option key={item.id} value={item.name}>{item.name}</option>
        ))}
      </select>
      </div>
        <div className="searchbar">
          <form class="form-inline my-2 my-lg-0">
            <input
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              style={{ maxWidth: "250px", marginTop: "20px" }}
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
        <div style={{ display: "flex" }}>
          <h2 style={{ marginBottom: 20, marginTop: 20 }}>Expenses</h2>
          {/* <div style={{marginLeft:"auto",marginTop:30, height:50}}>
                <button type="button" href="/addNewExpense" class="btn btn-primary ">Add Expense</button>
                
            </div> */}
        </div>
        <table class="table table-striped">
          <thead className="expense-heading" style={{ color: "white" }}>
            <tr>
              <th style={{cursor:"pointer"}} onClick={()=>{handleSort('Title')}} onDoubleClick={()=>{handleUnsort()}}>Title</th>
              <th>Category</th>
              <th style={{cursor:"pointer"}} onClick={()=>{handleSort('amount')}}>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>{rows}</tbody>
        </table>
      </div>
      <ConfirmBox
      open={open}
      closeDialog={() => setOpen(false)}
      title={deleteData.description}
      deleteFunction={removeExpense}
      />
    </div>
  );
};

export default Expenses;
