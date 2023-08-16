import "./App.css";
import SiginUp from "./components/SiginIn";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DonateForm from "./components/DonateForm";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SiginUp}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/home/donate" Component={DonateForm}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//AIzaSyDxOG0YmR7KX9KerR1nTORAuMhyDoKWyFo;