import React from "react";
import Navbar from './Navbar'


function OurServices() {
  return (
    <div className="our-services-container">
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <h2 className="sub-header2" style={{ textAlign: "center", color:"white" }}>
        OUR SERVICES
      </h2>
      <br />
      <h3 className="sub-header2" style={{ textAlign: "center", color:"white" }}>
        “By capturing true form, we transform the ordinary into the
        extraordinary”
      </h3>
      <br />
      <br />
      <div className="services">
        <div>
          <h3 className="sub-header2" style={{ textAlign: "center", color:"white" }}>GRAPHIC DESIGNING</h3>
          <br />
          <ul
            style={{ textAlign: "left", listStyle: "none" , color:"white"}}
            className="sub-header2"
          >
            <li>Postcards and flyers</li>
            <li>Posters and banners</li>
            <li>Brochures (print and digital)</li>
            <li>Signage and trade show displays</li>
          </ul>
        </div>
        <div>
          <h3 className="sub-header2">PHOTOGRAPHY</h3>
          <ul
            style={{ textAlign: "left", listStyle: "none" }}
            className="sub-header2"
          >
            <li>Events and conferences</li>
            <li>Corporate</li>
            <li>Studio photo shoots</li>
            <li>Personal events and functions</li>
          </ul>
          <br />
        </div>
        <div>
          <h3 className="sub-header2">VIDEO PRODUCTION</h3>
          <br />

          <ul
            style={{ textAlign: "left", listStyle: "none" }}
            className="sub-header2"
          >
            <li>Events and conferences</li>
            <li>Graduations and end year functions</li>
            <li>Personal Functions (e.g baby showers)</li>
            <li>Social media and websites</li>
            <li>Corporate video and ads</li>
            <li>Music Videos</li>
          </ul>
        </div>
        <div>
          <h3 className="sub-header2">MEDIA PRODUCTION</h3>
          <br />
          <ul
            style={{ textAlign: "left", listStyle: "none" }}
            className="sub-header2"
          >
            <li>Arranging Videos</li>
            <li>Narration and editing</li>
            <li>Creating audio-visual products</li>
            <li>Audio and Video messages</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
