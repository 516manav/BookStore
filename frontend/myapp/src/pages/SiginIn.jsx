import React, { useRef, useState } from "react";
import BackGround from "../components/BackGround";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../queries/querey";
import {toast}from "react-toastify"
const SiginUp = () => {
  const [NameErr, setNameErr] = useState(false);
  const [emailEmp, setemailEmp] = useState(false);
  const [emailErr, setemailErr] = useState(false);
  const [PassEmp, setPassEmp] = useState(false);
  const [PassErr, setPassErr] = useState(false);
  const name = useRef();
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate();


  const [resgister,{data,loading,error}]=useMutation(SIGN_IN)
 function validateEmail(email) {
  
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailRegex.test(email);
 }
  const log = () => {
    navigate("/login");
  };
  const handleRegister = (e) => {
    console.log("running")
    const Name = name.current.value;
    const Email = email.current.value;
    const Pass = pass.current.value;
    let a = 0,
      b = 0,
      c = 0;

    if (!Name) {
      setNameErr(true);
    } else {
      setNameErr(false);
      a = 1;
    }

    if (!Email) {
      setemailEmp(true);
    } else {
      setemailEmp(false);
      console.log(validateEmail(Email));
      if (validateEmail(Email)) {
        b = 1;
        setemailErr(false);
      } else {
        setemailErr(true);
      }
    }
    if (!Pass) {
      setPassEmp(true);
    } else {
      setPassEmp(false);
      if (Pass.length < 6) {
        setPassErr(true);
      } else {
        setPassErr(false);
        c = 1;
      }
    }
    if (a + b + c === 3) {
      
      resgister({
        variables: {
          name: Name,
          email: Email,
          password: Pass,
        },
      });
    
    }
    
    if(data){
      toast.success("Registered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const token = data.SignIn;
      localStorage.setItem("token",token);
      navigate("/map")
    }
    if(error){

            toast.error(error.message, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bily">
      <div className="-z-10 w-full h-full absolute">
        <BackGround />
      </div>
      <div className="flex flex-col z-10 bg-[#151515] sm:rounded-lg p-5 sm:px-10 px-7 items-start sm:w-max w-full sm:h-max h-full ">
        <div className="text-slate-50 font-semibold text-[1.7rem] mt-1 flex w-full ">
          Create a free account!
        </div>
        <div className="flex flex-col my-3">
          <span className="text-slate-200 font-thin my-2 text-xl mb-3">
            Name
          </span>
          <input
            type="text"
            className="sm:w-72 w-64 h-10 rounded-lg outline-none px-2 py-2 font-medium "
            ref={name}
          />
          {NameErr && (
            <small className="text-red-600 text-[1rem] ">
              Please enter the name
            </small>
          )}
        </div>
        <div className="flex flex-col ">
          <span className="text-slate-200 font-thin my-2 text-xl mb-3">
            Email
          </span>
          <input
            type="email"
            className="sm:w-72 w-64 h-10 rounded-lg outline-none px-2 py-2 font-medium "
            ref={email}
          />
          {emailEmp && (
            <small className="text-red-600 text-[1rem] ">
              Please enter the email
            </small>
          )}
          {emailErr && (
            <small className="text-red-600 text-[1rem] ">Invaild email</small>
          )}
        </div>
        <div className="flex flex-col my-2">
          <span className="text-slate-200 font-thin my-2 text-xl mb-3">
            Password
          </span>
          <input
            type="text"
            className="sm:w-72 w-64 h-10 rounded-lg outline-none px-2 py-2 font-medium"
            ref={pass}
          />
          {PassEmp && (
            <small className="text-red-600 text-[1rem] ">
              Please enter the password
            </small>
          )}
          {PassErr && (
            <small className="text-red-600 text-[1rem] ">
              Password must have 6 character
            </small>
          )}
        </div>
        <div className="flex w-full items-center justify-center mt-7 mb-5">
          <button
            className="text-xl bg-slate-50 text-slate-900 px-4 py-2 font-semibold rounded-lg w-full "
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </button>
        </div>
        <div className="text-slate-50">
          Already have an account?
          <button
            className="font-bold"
            onClick={() => {
              log();
            }}
          >
            Login
          </button>{" "}
          instead
        </div>
      </div>
    </div>
  );
};

export default SiginUp;
