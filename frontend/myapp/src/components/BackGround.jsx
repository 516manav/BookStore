import React from "react";
import "./back.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img10.webp";
import img12 from "../assets/img11.jpg";
import img13 from "../assets/img12.jpeg";
import img14 from "../assets/img13.jpg";
import img15 from "../assets/img14.jpeg";
import img16 from "../assets/img15.jpeg";

const BackGround = () => {
  return (
    <div className="flex w-full h-full flex-col bg-[#151515] opacity-[97] ">
      <div className="flex w-full h-[33rem] ">
        <div className="flex h-full flex-1  flex-col px-2 overflow-hidden sp_slider">
          <div className="w-100%  sp_slide">
            <img src={img1}></img>
          </div>
          <div className="w-100%   sp_slide">
            <img src={img2}></img>
          </div>
          <div className="w-100%   sp_slide">
            <img src={img3}></img>
          </div>
          <div className="w-100%    sp_slide">
            <img src={img4}></img>
          </div>
          <div className="w-100%  sp_slide">
            <img src={img5}></img>
          </div>
          <div className="w-100%  sp_slide">
            <img src={img7}></img>
          </div>
        </div>
        <div className="flex h-full flex-1  flex-col px-2 overflow-hidden sp_slider">
          <div className="w-100%   my-3 sp_slide2">
            <img src={img8}></img>
          </div>
          <div className="w-100%   my-6 sp_slide2">
            <img src={img7}></img>
          </div>
          <div className="w-100%   my-6 sp_slide2">
            <img src={img9}></img>
          </div>
          <div className="w-100%   my-6 sp_slide2">
            <img src={img1}></img>
          </div>
          <div className="w-100%   my-6 sp_slide2">
            <img src={img10}></img>
          </div>
          <div className="w-100%   my-6 sp_slide2">
            <img src={img11}></img>
          </div>
        </div>
        <div className="flex h-full flex-1  flex-col px-2 overflow-hidden sp_slider">
          <div className="w-100%   my-6 sp_slide3">
            <img src={img4}></img>
          </div>
          <div className="w-100%   my-6 sp_slide3">
            <img src={img15}></img>
          </div>
          <div className="w-100%   my-6 sp_slide3">
            <img src={img13}></img>
          </div>
          <div className="w-100%   my-6 sp_slide3">
            <img src={img14}></img>
          </div>
          <div className="w-100%   my-6 sp_slide3">
            <img src={img2}></img>
          </div>
          <div className="w-100%   my-6 sp_slide3">
            <img src={img8}></img>
          </div>
        </div>
        <div className="flex h-full flex-1  flex-col px-2 overflow-hidden sp_slider">
          <div className="w-100%   my-7 sp_slide">
            <img src={img7}></img>
          </div>
          <div className="w-100%   my-7 sp_slide4">
            <img src={img4}></img>
          </div>
          <div className="w-100%   my-7 sp_slide4">
            <img src={img10}></img>
          </div>
          <div className="w-100%   my-7 sp_slide4">
            <img src={img4}></img>
          </div>
          <div className="w-100%   my-7 sp_slide4">
            <img src={img9}></img>
          </div>
          <div className="w-100%   my-7 sp_slide4">
            <img src={img14}></img>
          </div>
        </div>
        <div className="flex h-full flex-1  flex-col px-2 overflow-hidden sp_slider">
          <div className="w-100%   my-7 sp_slide">
            <img src={img11}></img>
          </div>
          <div className="w-100%   my-7 sp_slide5">
            <img src={img4}></img>
          </div>
          <div className="w-100%   my-7 sp_slide5">
            <img src={img13}></img>
          </div>
          <div className="w-100%   my-7 sp_slide5">
            <img src={img7}></img>
          </div>
          <div className="w-100%   my-7 sp_slide5">
            <img src={img8}></img>
          </div>
          <div className="w-100%   my-7 sp_slide5">
            <img src={img10}></img>
          </div>
        </div>
      </div>
      <div className="sp_bottom flex w-full h-full bg-[#151515]"></div>
    </div>
  );
};

export default BackGround;
