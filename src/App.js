import Home from "./components/Home";
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import UpdateExpense from "./components/UpdateExpense";
import AddNewExpense from "./components/AddNewExpense";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Cards from "./components/Cards";
import AddNewCategory from "./components/AddNewCategory";
// import AddNewCategory from "./components/AddNewCategory";

function App() {
  return (
    <div className="App">
      
      {/* <AppNav/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' exact={true} element={<Login/>} ></Route>
          <Route path='/register' exact={true} element={<Register/>} ></Route>
          <Route path='/home' exact={true} element={<Home/>} ></Route>
          
          <Route path='/Cards' exact={true} element={<Cards/>} ></Route>
          <Route path='/updateExpense/:id' exact={true} element={<UpdateExpense/>} ></Route>
          <Route path='/AddNewExpense' exact={true} element={<AddNewExpense/>}></Route>
          <Route path='/AddNewCategory' exact={true} element={<AddNewCategory/>}></Route>


          {/* <Route path='/categories' exact={true} component={Categories} ></Route> */}
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
