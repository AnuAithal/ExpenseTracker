import { useState, useEffect } from "react";
import axios from "axios";
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,

} from "react-vis";
import { getExpense } from "../services/UserService";
import AppNav from "./AppNav";

function  BarChart () {
  const [expenses, setExpenses] = useState([]);

useEffect(() => {
    
    async function getExpenses(){
      await getExpense()
      .then((res) => {
          setExpenses(res);
         
      })
      .catch((err) => {
      console.log("erroor ", err);
      });
    }
    getExpenses()

  },[]);
  console.log("expneweeee", expenses);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthIndex = (new Date().getMonth());
   let monthName = monthNames[monthIndex-1];


  const filterExpensesByMonth = (month) => {
     let value=0;
  
   
      for(let j=0; j<expenses.length; j++){
      const expenseMonth = new Date(expenses[j].expenseDate).getMonth();
      if(expenseMonth+1 === month){
        value=Number(value) + Number(expenses[j].amount);
      }
     
    }

    return {
      month: month,
      totalExpense: value
     }
 
  
    // const totalExpense = filteredExpenses.reduce((sum, expense) => {
    // return  sum + expense;
    // }, 0);

    
  };

  const renderChart = () => { 
    const data = [];
    for (let i = 1; i <= 12; i++) {
      const expense = filterExpensesByMonth(i);
      console.log(expense)
      data.push({ x: expense.month, y:Number(expense.totalExpense) });
    
    }
    
    console.log('final data: ', data);
 
    
    return (
    <div>
      <div className="App" style={{paddingTop:"40px", paddingLeft:"300px", paddingRight:"300px"} }>
      <FlexibleWidthXYPlot height={600} xType="ordinal" yDomain={[0,10000]} color="#007bff" style={{backgroundImage: "linear-gradient(50deg, rgb(161, 159, 159), rgba(0, 0, 0, 0.711))",marginTop:"-70px"}}>
        <HorizontalGridLines style={{stroke: '#e0e0e0', strokeWidth: 1}}/>
        <VerticalGridLines style={{stroke: '#e0e0e0', strokeWidth: 1}}/>
        <XAxis tickFormat={(monthIndex) => monthNames[monthIndex-1]} />
        <YAxis tickFormat={(d) => d >= 1000 ? `${d / 1000}k` : d}/>
        <VerticalBarSeries data={data} />
      </FlexibleWidthXYPlot>
      </div>
      </div>
    );
  };

  return <div>
            <AppNav/>
            <p style={{marginTop:"30px",paddingLeft:"100px", fontSize:"20px"}}>Your Total Income = ₹20,000</p>
            <div className="container" style={{  height:"650px", marginTop:"60px", marginBottom:"50px"}}>
            
            {renderChart()}

            </div>
            </div>;
}

export default BarChart;
