import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UpdateExpense from './UpdateExpense';


const Expenses = () => {


    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [expenses, setExpenses] = useState([]);
    


    //GET EXPENSES
    const fetchAPI = async() => {
       
        setLoading(true);
        const responseExp = await axios.get("http://localhost:8080/expenses");
        setExpenses(responseExp.data);
        // console.log(responseExp.data);
        setLoading(false);
        
    }

    useEffect( ()=> {
        fetchAPI();
    }, [])

    

    //DELETE EXPENSE
    // function removeExpense(id){

    //     // axios.delete(`/api/expenses/${id}`)
    //     // fetchAPI()

    //     fetch(`/api/expenses/${id}`,{
    //         method:"DELETE",
    //         //mode: "cors"
    //         headers : {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((result)=>{
    //         result.json().then((resp)=>{
    //             console.warn(resp)
    //             fetchAPI()
    //         })
    //     })
    // }

    // useEffect( ()=> {
    //     removeExpense();
    // }, [])

    const removeExpense = async(id) => {
        
        const responseDel = await axios.delete(`http://localhost:8080/expenses/${id}`);
        // setExpenses(responseDel.data);
        fetchAPI();

    }


    // async function removeExpense(id) {
    //     console.log(id);
    //     try {
    //       const response = await axios.delete(`/api/expenses/${id}`);
    //       console.log(response.data);
    //       return response.data;
    //     } catch (error) {
    //       console.error(error);
    //       throw error;
    //     }
    //   }



    // function selectExpense(id){
    //     console.log(id);
    //     let item=expenses[id];
        
    //     console.log(expenses[id]);

    //     setSeeExpense(
    //         {
    //             title: item.description,
    //             category: item.category.name,
    //             amount: item.amount,
    //             date: item.expenseDate
    //         }
    //     )
    
    //     return item
        

    // }


    const rows = 
        expenses.map ( (expense, index) => 
            
            <tr >
                    <td>{expense.description}</td>
                    <td>{expense.categoryName}</td>
                    <td>₹{expense.amount}</td>
                    <td>{expense.expenseDate}</td>
                    <td style={{gap:50}}>
                        <button type="button" class="btn btn-danger btn-sm deletebutton" onClick={() => removeExpense(expense.id)} >Delete</button>
                        <Link className='btn btn-primary btn-sm updatebutton' to={`/updateExpense/${expense.id}`}>Update</Link>
                    </td>
                    {/* "btn btn-primary btn-sm updatebutton" */}
            </tr>
            )

  return (
    <div>
      
      <div  class="container">
        <div style={{display:"flex"}}>
            <h2 style={{marginBottom:20, marginTop:20}}>Expenses</h2>
            {/* <div style={{marginLeft:"auto",marginTop:30, height:50}}>
                <button type="button" href="/addNewExpense" class="btn btn-primary ">Add Expense</button>
                
            </div> */}
        </div> 
        <table class="table table-striped">
            <thead className='expense-heading'>
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
