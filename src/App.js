import { Route, Routes } from "react-router";
import "./App.css";
import BmiCalculator from "./pages/bmi";
import Home from "./pages/home";
import Plan from "./pages/plan";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Forgot from "./pages/forgot";
import Reset from "./pages/reset";

function App() {
  
  return (
    <div className="App ">
      <div>
       
      <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/forgetpass" element={<Forgot/>}></Route>
          <Route path="/resetpass" element={<Reset/>}></Route>



          <Route  path="/dashboard" element= {<Home/>} ></Route>

          <Route  path="/plan" element= {<Plan/>} ></Route>



          <Route  path="/bmi" element= {<BmiCalculator/>} ></Route>

      </Routes>
      </div>
    </div>
  );
}

export default App;
