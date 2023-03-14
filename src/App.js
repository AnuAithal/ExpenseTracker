import AppNav from "./components/AppNav";
import Home from "./components/Home";
import Categories from "./components/Categories";

import {BrowserRouter , Route, Routes} from 'react-router-dom';
import AddExpense from "./components/AddExpense";

function App() {
  return (
    <div className="App">
      <AppNav/>

      <BrowserRouter>
        <Routes>
          <Route path='/' exact={true} element={<Home/>} ></Route>
          {/* <Route path='/categories' exact={true} component={Categories} ></Route> */}
          <Route path='/addExpense' exact={true} element={<AddExpense/>} ></Route>
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
