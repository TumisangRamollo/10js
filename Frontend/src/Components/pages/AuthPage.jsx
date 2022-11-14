import React from "react";
import AuthNavbar from "./AuthNavbar";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="authPage">
      <AuthNavbar />
      <br />
      <br />
      <br />
      <br />
      <div className="auth-grid">
        <h1 className="sub-header auth-h1">Welcome to 10Js <span style={{color:"yellow"}}>Media Production</span></h1>
        <br />
        <div className="homeButtonsContainer">
          <Link to="/admin">
            <input
              type="button"
              className="homeButtons btn btn-info"
              value="User"
            />
          </Link>
          <Link to="/home">

          <input
            type="button"
            className="homeButtons btn btn-warning"
            value="Visitor"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
