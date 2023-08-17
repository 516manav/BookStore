import "./App.css";
import SiginUp from "./components/SiginIn";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import DonateForm from "./components/DonateForm";
import MapSearch from "./components/MapSearch";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="flex w-screen h-screen">
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
          <Route path="/" Component={SiginUp}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/map" Component={MapSearch}></Route>
          <Route path="/home/donate" Component={DonateForm}></Route>
          <Route path="/home/profile/" Component={Profile}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//AIzaSyDxOG0YmR7KX9KerR1nTORAuMhyDoKWyFo;