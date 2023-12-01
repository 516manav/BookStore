import React from 'react'
import Autos from './Auto';
import { useNavigate } from 'react-router-dom';

const Nav = ({ selectPosition, setSelectPosition,page,setSearch}) => {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/")
  }
  const profile=()=>{
   
    navigate('/home/profile')
  }
  return (
    <div className="w-full h-full py-2 flex justify-between items-center border-solid border-b-2 border-gray-300 ">
      <div>
        {page == "map" && (
          <Autos
            selectPosition={selectPosition}
            setSelectPosition={setSelectPosition}
          ></Autos>
        )}
        {page == "home" && (
          <input
            className="input"
            name="text"
            placeholder="Search..."
            type="search"
          ></input>
        )}
      </div>
      <div className="flex ">
        <button
          onClick={() => {
            profile();
          }}
          className="bg-blue-500 text-white text-lg font-semibold border-none rounded-lg mx-3  px-3"
        >
          Profile
        </button>
        <div className="flex text-xl font-semibold mr-5">
          <button
            onClick={() => {
              logout();
            }}
            className="bg-red-500 text-slate-50 px-4 py-1 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav
