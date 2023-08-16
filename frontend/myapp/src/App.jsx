import "./App.css";
import SiginUp from "./components/SiginIn";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DonateForm from "./components/DonateForm";
import MapSearch from "./components/MapSearch";
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