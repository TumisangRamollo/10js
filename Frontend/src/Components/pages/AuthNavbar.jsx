import React from 'react'
import { Link } from "react-router-dom";
import WhatsApp from "../../Asserts/WhatsApp.svg.png";
import FaceBook from "../../Asserts/Facebook.webp";
import Instagram from "../../Asserts/Instagram_logo_2016.svg.png";
import Twitter from "../../Asserts/Twitter-logo.svg.webp";
import Logo from "../../Asserts/logo.jpeg"; 


const AuthNavbar = () => {
  return (
    <div>
    <div className="nav-container">
      <div>{/* <img className="Logo" src={Logo} alt="LOGO" /> */}</div>
      <nav className="nav">
        {/* <ul className="nav-ul">
          <li className="nav-ul-li">
            <Link to="/home">
              <a className="first">HOME</a>
            </Link>
          </li>
          <li className="nav-ul-li">
            <Link to="/gallery">
              <a className="first">GALLERY</a>
            </Link>
          </li> */}
          {/* <li className="nav-ul-li">
            <Link to="/blog">
              <a className="last">BLOG</a>
            </Link>
          </li> */}
          {/* <li className="nav-ul-li">
            <Link to="/services">
              <a className="last">SERVICES</a>
            </Link>
          </li>
          <li className="nav-ul-li">
            <Link to="/pricing">
              <a className="last">PRICING</a>
            </Link>
          </li>
          <li className="nav-ul-li">
            <Link to="/contact">
              <a className="last">CONTACT</a>
            </Link>
          </li>
          <li className="nav-ul-li">
            <Link to="/about">
              <a className="last">ABOUT</a>
            </Link>
          </li>
        </ul> */}
      </nav>
      <div className="social">
        <a href="" className="href">
          <img className="Social-media1" src={WhatsApp} alt="WhatsApp" />
        </a>
        <a href="" className="href">
          <img className="Social-media" src={FaceBook} alt="Facebook" />
        </a>
        <a href="" className="href">
          <img className="Social-media" src={Twitter} alt="Tweeter" />
        </a>
        <a href="" className="href" target="blank">
          <img className="Social-media" src={Instagram} alt="Instergram" />
        </a>
      </div>
    </div>

    </div>
  )
}

export default AuthNavbar