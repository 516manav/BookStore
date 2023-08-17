import React, { useRef, useState } from "react";
import BackGround from "./BackGround";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../queries/querey";
import {toast} from "react-toastify"
const Login = () => {
  const [EmailEmp, setEmailEmp] = useState(false);
  const [EmailErr, setEmailErr] = useState(false);
  const [PassEmp, setPassEmp] = useState(false);
  const [PassErr, setPassErr] = useState(false);
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate();
  const [login,{data,loading,error}]=useMutation(LOGIN);
  const sign = () => {
    navigate("/");
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleRegister = (e) => {
    const Email = email.current.value;
    const Pass = pass.current.value;
    let b = 0,
      c = 0;

    if (!Email) {
      setEmailEmp(true);
    } else {
      setEmailEmp(false);
      if (validateEmail(Email)) {
        b = 1;
        setEmailErr(false);
      } else {
        setEmailErr(true);
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
    if (b + c === 2) {

      login({
        variables: {
          email:Email,
          password: Pass,
        },
      });
    }
    if(data){
      toast.success("Logged in !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const token=data.Login;
       localStorage.setItem("token", token);
       navigate("/map");

    }
        if (error) {
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
    <div className="w-full h-full flex justify-center items-center bily">
      <div className="-z-10 w-full h-full absolute">
        <BackGround />
      </div>
      <div className="flex flex-col z-10 bg-[#151515] sm:rounded-lg p-5 sm:px-10 px-13 items-start sm:w-max w-full sm:h-max h-full">
        <div className="text-slate-50 font-semibold text-[1.7rem] mt-1 flex w-full ">
          Welcome to Sharead
        </div>

        <div className="flex flex-col ">
          <span className="text-slate-200 font-thin my-2 text-xl mb-3">
            Email
          </span>
          <input
            type="text"
            className="sm:w-72 w-64 h-10 rounded-lg outline-none px-2 py-2 font-medium "
            ref={email}
          />
          {EmailEmp && (
            <small className="text-red-600 text-[1rem] ">
              Please enter the email
            </small>
          )}
          {EmailErr && (
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
          Don't have an account?
          <span
            className="font-bold"
            onClick={() => {
              sign();
            }}
          >
            SignIn
          </span>{" "}
          instead
        </div>
      </div>
    </div>
  );
};

export default Login;
