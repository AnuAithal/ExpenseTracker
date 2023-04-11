import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UpdateExpense from "./UpdateExpense";
import { getExpense } from "../services/UserService";



const Expenses = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let token = localStorage.getItem('token')
  console.log("tokkeennn",token);

  

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
      })
      .catch((err) => {
      console.log("erroor login", err);
      });
    }
    getExpenses()

  },[]);

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


  const removeExpense = async (id) => {
    const responseDel = await axios.delete(`http://localhost:8080/expenses/${id}`);
    await getExpense()
    .then((res) => {
      setExpenses(res);
    })
  };

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
        <td>{expense.expenseDate}</td>
        <td style={{ gap: 50 }}>
          <button
            type="button"
            class="btn btn-danger btn-sm deletebutton"
            onClick={() => removeExpense(expense.id)}
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
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>{rows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
