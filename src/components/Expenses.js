import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateExpense from './UpdateExpense';

const Expenses = () => {
    const [loading, setLoading] = useState(true);
    const [expenses, setExpenses] = useState([]);
    const [seeExpense, setSeeExpense] = useState({
        title:"helllo ",
        category:"",
        amount:"",
        date:""
    })

    // const [title, setTitle] = useState("");
    // const [category, setCategory] = useState("");
    // const [amount, setAmount] = useState("");
    // const [date, setDate] = useState("");

    //GET EXPENSES
    const fetchAPI = async() => {
        setLoading(true);
        
        const responseExp = await axios.get("http://localhost:8080/api/expenses");
        setExpenses(responseExp.data);
    
        setLoading(false);
    }

    useEffect( ()=> {
        fetchAPI();
    }, [])


    //DELETE EXPENSE
    function removeExpense(id){
        fetch(`http://localhost:8080/api/expenses/${id}`,{
            method:"DELETE",
            //mode: "cors"
            headers : {
                'Content-Type': 'application/json'
            }
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                fetchAPI()
            })
        })
    }

    // useEffect( ()=> {
    //     removeExpense();
    // }, [])

    // const removeExpense = async(id) => {
        
    //     const responseDel = await axios.delete(`http://localhost:8080/api/expenses/${id}`);
    //     setExpenses(responseDel.data);
    //     fetchAPI();

    // }

    function selectExpense(id){
        let item=expenses[id-1];
        
        //console.log(item);
        // setTitle(item.description);
        // setCategory(item.category.name);
        // setAmount(item.amount);
        // setDate(item.expenseDate);

        
        setSeeExpense(prevSeeExpense => {
            return {
                title: item.description,
                category: item.category.name,
                amount: item.amount,
                date: item.expenseDate
            }
        })
        console.log(item.description);
        
    }



    const rows = 
        expenses.map ( expense => 
            
            <tr>
                    <td>{expense.description}</td>
                    <td>{expense.category.name}</td>
                    <td>₹{expense.amount}</td>
                    <td>{expense.expenseDate}</td>
                    <td style={{gap:50}}>
                        <button type="button" class="btn btn-danger btn-sm" onClick={() => removeExpense(expense.id)} >Delete</button>
                        <Link to="/updateExpense" component={<UpdateExpense seeExpense={seeExpense} />}>
                            <button href="/updateExpense" style={{marginLeft:20}} type="button" class="btn btn-primary btn-sm" onClick={() => selectExpense(expense.id)} >Update</button>
                        </Link>
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
