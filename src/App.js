import AppNav from "./components/AppNav";
import Home from "./components/Home";
import Categories from "./components/Categories";

import {BrowserRouter , Route, Routes} from 'react-router-dom';

import UpdateExpense from "./components/UpdateExpense";

function App() {
  return (
    <div className="App">
      <AppNav/>

      <BrowserRouter>
        <Routes>
          <Route path='/' exact={true} element={<Home/>} ></Route>
          {/* <Route path='/categories' exact={true} component={Categories} ></Route>
          <Route path='/addExpense' exact={true} element={<AddExpense/>} ></Route> */}
          <Route path='/updateExpense' exact={true} element={<UpdateExpense/>} ></Route>
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
