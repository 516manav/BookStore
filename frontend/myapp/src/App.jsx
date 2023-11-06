import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import SiginUp from "./pages/SiginIn"
import MapSearch from "./pages/MapSearch";
import DonateForm from "./pages/DonateForm";
import Profile from "./pages/Profile";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
function App() {
  return (
    <div className="flex w-screen ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/landing" Component={LandingPage}></Route>
          <Route path="/" Component={SiginUp}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/map" Component={MapSearch}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/home/donate" Component={DonateForm}></Route>
          <Route path="/home/profile/" Component={Profile}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//AIzaSyDxOG0YmR7KX9KerR1nTORAuMhyDoKWyFo;