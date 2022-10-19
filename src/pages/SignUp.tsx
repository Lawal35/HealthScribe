import React from "react";
import SignUpNavbar from "../layouts/SignUpNavbar";
import logo from '../assets/blank.jpg';
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import { useNavigate } from "react-router-dom";

const SignUp = () => {    

  const navigate = useNavigate()
  const widthsize = screen.width

  return (
    <div className="vh-100" style={{backgroundColor: "#F5F5F5"}}>
      <SignUpNavbar />
        <div
          className='my-auto position-relative py-4 container d-flex flex-column pt-5 align-items-center justify-content-center' >
            <img src={logo} alt='logo.png' height='60' width='150' />
          <h2 className="mt-4">Welcome to HealthScribe</h2>
          <div className="d-flex mt-4 mb-5">
            <input type="checkbox" />
            <p className="mb-0 ms-2">I agree to the terms of use</p>
          </div>
          <button onClick={()=> navigate('/login')} className="border py-3 mb-4 bg-light px-5 justify-content-center gap-md-4 d-flex align-items-center rounded border-2" style={{width: widthsize <= 575 ? '300px' : '500px'}} >
            <img src={google} alt="" />
            <p className="mb-0 ms-3">Sign up with Google</p>
          </button>
          <button onClick={()=> navigate('/login')} className="border py-3 bg-light px-5 justify-content-center gap-md-4 d-flex align-items-center rounded border-2" style={{width: widthsize <= 575 ? '300px' : '500px'}} >
            <img src={facebook} alt="" />
            <p className="mb-0 ms-3">Sign up with Facebook</p>
          </button>
        </div>
    </div>
  );
};

export default SignUp;
