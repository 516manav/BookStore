import React from 'react'
import Autos from './Auto';
import { useNavigate } from 'react-router-dom';

const Nav = ({ selectPosition, setSelectPosition }) => {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate("/")
  }
  const profile=()=>{
   
    navigate('/home/profile')
  }
  return (
    <div className="w-full h-full flex justify-between items-center bg-teal-300">
      <div>
        <Autos
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        ></Autos>
      </div>
      <div className='flex '>
        <button 
        onClick={()=>{
          profile()
        }}
        className='bg-cyan-300 text-slate-950 border-none rounded-xl mx-3 font-medium px-3'>
          Profile
        </button>
        <div className="flex text-xl font-semibold mr-5">
          <button
            onClick={() => {
              logout();
            }}
            className="bg-red-500 text-slate-50 px-4 py-1 rounded-lg font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav
