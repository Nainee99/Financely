import React from "react";
import Header from "../components/Header";
import SignUp from "../components/SignUp";
import "../App.css";

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
