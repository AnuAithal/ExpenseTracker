import Home from "./components/Home";
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import UpdateExpense from "./components/UpdateExpense";
import AddNewExpense from "./components/AddNewExpense";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Cards from "./components/Cards";
import AddNewCategory from "./components/AddNewCategory";
import AppNav from "./components/AppNav";
import Expenses from "./components/Expenses";
import Recurring from "./components/Recurring";
import Loader from "./components/Loader";
import BarChart from "./components/BarChart";
// import AddNewCategory from "./components/AddNewCategory";

function App() {
  return (
    <div className="App">

      
      {/* <AppNav/> */}

      <BrowserRouter>
      {/* <AppNav/> */}
        <Routes>
          <Route path='/' exact={true} element={<Login/>} ></Route>
          <Route path='/register' exact={true} element={<Register/>} ></Route>
          <Route path='/home'  element={<Home/>} ></Route>
          
          <Route path='/Cards' exact={true} element={<Cards/>} ></Route>
          <Route path='/updateExpense/:id' exact={true} element={<UpdateExpense/>} ></Route>
          <Route path='/AddNewExpense' exact={true} element={<AddNewExpense/>}></Route>
          <Route path='/AddNewCategory' exact={true} element={<AddNewCategory/>}></Route>
          <Route path="/Recurring" exact={true} element={<Recurring/>}></Route>
          <Route path="/barChart" exact={true} element={<BarChart/>}></Route>

          {/* <Route path='/categories' exact={true} component={Categories} ></Route> */}
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
