import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import SiginUp from "./pages/SiginIn"
import MapSearch from "./pages/MapSearch";
import DonateForm from "./pages/DonateForm";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SiginUp}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/map" Component={MapSearch}></Route>
          <Route path="/home/donate" Component={DonateForm}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//AIzaSyDxOG0YmR7KX9KerR1nTORAuMhyDoKWyFo;