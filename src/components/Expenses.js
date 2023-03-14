import React,{useState, useEffect} from 'react'
import axios from 'axios';

const Expenses = () => {
    const [loading, setLoading] = useState(true);
    const [expenses, setExpenses] = useState([]);

    const fetchAPI = async() => {
        setLoading(true);
        
        const responseExp = await axios.get("http://localhost:8080/api/expenses");
        setExpenses(responseExp.data);
    
        setLoading(false);
    }

    useEffect( ()=> {
        fetchAPI();
    }, [])

    const rows = 
        expenses.map ( expense => 
            
            <tr>
                    <td>{expense.description}</td>
                    <td>{expense.category.name}</td>
                    <td>₹{expense.amount}</td>
                    <td>{expense.expenseDate}</td>
                    <td style={{gap:50}}>
                        <button type="button" class="btn btn-danger btn-sm" onClick={remove(expense.id)} >Delete</button>
                        <button  style={{marginLeft:20}} type="button" class="btn btn-primary btn-sm">Update</button>
                    </td>
            </tr>


            )

  return (
    <div>
      
      <div  class="container">
        <div style={{display:"flex"}}>
            <h2 style={{marginBottom:20, marginTop:20}}>Expenses</h2>
            <div style={{marginLeft:"auto",marginTop:30, height:50}}>
                <button type="button" class="btn btn-primary ">Add Expense</button>
                
            </div>
        </div> 
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {rows}

            </tbody>
        </table>
        </div>

    </div>
  )
}

export default Expenses
