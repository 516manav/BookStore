import React from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import '../css/profile.css';
import prebought from '../assets/Previously bought.png'
import presold from '../assets/Sell Request.png';
import buy from '../assets/buy Request.png';
import sell from '../assets/shopping-cart.png';
import img1 from "../assets/img1.jpg";
const Profile = () => {
    const params=useParams();
    const token=params.id
    console.log(token)
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-white overflow-y-auto">
      <div className="w-full h-20 flex">
        <Nav></Nav>
      </div>
      <div className="w-full h-full flex sm:px-[10rem] px-5 py-5 flex-col ">
        <div className="text-4xl font-normal flex w-full">Your Account</div>
        <div className="flex w-full mt-8 items-center">
          <img
            src={img1}
            className="w-36 h-36 object-cover rounded-full mx-5"
          ></img>
          <div className="ml-5">
            <div className="text-[3rem] font-semibold">Shivam Patil</div>
            <div className="text-xl font-normal">shivampatil22@gmail.com</div>
          </div>
        </div>
        <div className="flex w-full justify-around mt-10">
          <div className="flex flex-col">
            <span className="text-[1.5rem] font-normal">
              Books Donated/Sold
            </span>
            <span className="text-[2rem] font-medium">20</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[1.5rem] font-normal">Books recieved</span>
            <span className="text-[2rem] font-medium">30</span>
          </div>
        </div>
        <div className="container">
          <a><img src={prebought} alt="" />Previously Bought</a>
          <a><img src={presold} alt="" />Previously Sold</a>
          <a><img src={buy} alt="" />Buy Request</a>
          <a><img src={sell} alt="" />Sell Request</a>
        </div>
        
      </div>
    </div>
  );
}

export default Profile
