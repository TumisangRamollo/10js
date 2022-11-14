import React, { useState } from "react";
import Navbar from './Navbar'
import Thabang from "../../Asserts/Thabang.png";
import Js from "../../Asserts/10js.png";
import Client1 from "../../Asserts/client1.png";
import Client2 from "../../Asserts/client2.png";
import Client3 from "../../Asserts/client3.png";
import Client4 from "../../Asserts/client4.png";

import { json } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

function About() {
  // const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div className="about" >
      <Navbar/>
      <br />
      <div className="profile">
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }} className="sub-header2">
          COMPANY PROFILE
        </h1>
      </div>
      <br />
      <br />
      <div className="header">
        <p className="sub-header2">
          10JS Photographers TP delivers stunning portraits, beautiful vibrant
          canvases of art for your graphics desire don’t forget the high FPS
          quality videos ads and events shoot and excellent customer services.
          We pride ourselves in providing you with stunning picture’s and videos
          that capture those special moments you don’t want to forget in an
          artistically unique timeless fashion, We have strong, healthy
          relationship with events planners, marketing companies and individuals
          clients. We pride ourselves in having a fresh innovative approach
          resulting in delivering an excellent service with every project w
          execute.
        </p>
      </div>
      <br />
      <br />
      <br />
      
      <br />
      <div className="vision-mission-values">
        <h2 style={{ textAlign: "center" }} className="sub-header2">
          VISION-MISSION-VALUES
        </h2>
        <br />
        <br />
        <br />
        <div className="vision-mission-values-wrapper">
          <div>
            <h3 style={{ textAlign: "center" , color:"white"}}>CORE VALUES</h3>
            <br />
            <ul>
              <li className="sub-header2">
                We value the relationship with our clients.
              </li>
              <li className="sub-header2">
                Respect by treating our clients the same way we would like to be
                treated.
              </li>
              <li className="sub-header2">
                Dependability and trust- creating an environment where clients
                can depend and trust us with their memories and image by
                delivering and exceeding expectations.
              </li>
              <li className="sub-header2">
                Quality- providing high quality services and deliver results
                based on the mutually agreed-to requirements.
              </li>
              <li className="sub-header2">
                Integrity- we uphold our reputation in the workplace and provide
                ethical work environment for all our employees and clients.
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }} className="sub-header2">
              MISSION
            </h3>
            <br />
            <ul>
              <li className="sub-header2">
                Our mission is to earn the trust & respect of our clients and
                provide lasting memories with the finest quality of portraiture
                that graces the home and touches the hearts of our clients.{" "}
              </li>

              <li className="sub-header2">
                {" "}
                To serve our clients by with the integrity they deserve also to
                make their vision our mission and responding to their needs.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="sub-header2" style={{ textAlign: "center" }}>
              VISION
            </h3>
            <br />
            <ul>
              <li className="sub-header2">
                {" "}
                To be with you, for all life's important moments, and to have a
                very strong family bond.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="about-ceo">
        <h2 style={{ textAlign: "center" }} className="sub-header2">
          ABOUT THE CEO
        </h2>
        <br />
        <br />
        <div className="about-ceo-wrapper">
          <div>
            <img src={Thabang} alt="" />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p className="sub-header2">
              The founder of 10Js Photographers TP is Thabang Elias Khoza from
              the small village called Jakkalas dans, in Winterveldt. His
              inspiration to be a photographer was ignited by his father who by
              a profession he is an a law enforcer, his father used to shoot
              weddings of friends and family around as gesture of gratitude ,
              but Thabang saw that as an opportunity to be more than a family
              photographer, but a profession photographer with passion, from
              that moment around 2010 at the age of 16 years he embarked of how
              to become a professional photographer also a makerpreneur, he used
              all kinds of phone he can get his hands on to shoot a beautiful
              picture.
            </p>
            <br />
            <p className="sub-header2">
              One time when his father was given a surveillance equipment to
              capture some criminals in action, while scrolling through the
              camera he’d come across picture that he doesn’t even know at
              times, pictures of weddings, parties and more, it be Thabang was
              very busy with a police cam doing business, his father saw the
              potential an allowed him use the camera Sony Alpha 200 and bought
              him a same time picture printer with the money he saved for him
              all these years to start life, 9 year later he registered his
              company and now his doing more than photography .
            </p>
            <br />
            <img className="Js-img" src={Js} alt="" />{" "}
            <a
              style={{ cursor: "pointer", textDecoration: "none !important" }}
              className="detail-link"
              color="danger"
              onClick={toggle}
            >
              Click here for company details
            </a>
            <Modal isOpen={modal} toggle={toggle}>
              {/* <ModalHeader toggle={toggle} close={closeBtn}>
                Modal title
              </ModalHeader> */}
              <ModalBody>
                <div>
                  <h2 style={{ textAlign: "center" }}>COMPANY DETAILS</h2>
                </div>
                <div>
                  <h3 style={{ textAlign: "center" }}>
                    CHANGING HOW THE WORLD IS SEEN
                  </h3>
                </div>
                <br />
                <table>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>Enterprise Name:</td>
                      <td>10JS TP (Pty) Ltd</td>
                    </tr>
                    <tr>
                      <td>Enterprise Registration Number</td>
                      <td>2019/377137/07</td>
                    </tr>
                    <tr>
                      <td>Income Tax Number</td>
                      <td>9406115173080</td>
                    </tr>
                    <tr>
                      <td>Physical Address</td>
                      <td>
                        {" "}
                        <ul>
                          <li>20507 Jakalasdans</li>
                          <li>Klipgat C</li>
                          <li>Madibeng</li>
                          <li>North West</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Postal Address</td>
                      <td>
                        <ul>
                          <li>20507 Jakalas dans</li>
                          <li>Klipgat C</li>
                          <li>Madibeng,</li>
                          <li>North West</li>
                          <li>0202</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Contact person</td>
                      <td>Elias Thabang Khoza</td>
                    </tr>
                    <tr>
                      <td>Telephone</td>
                      <td>079 345 4952</td>
                    </tr>
                    <tr>
                      <td>Fax Number</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td>Email Address</td>
                      <td>eliaskhoza4@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Directors</td>
                      <td>Elias Thabang Khoza</td>
                    </tr>
                    <tr>
                      <td>Year Established</td>
                      <td>2019</td>
                    </tr>
                    <tr>
                      <td>Industry Preferences</td>
                      <td>
                        Arts and Entertainment, Media, Advisory, Consulting
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "} */}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="referals">
        <h2
          style={{ textAlign: "center", padding: "2rem" }}
          className="sub-header2"
        >
          CLIENTS AND REFERALS
        </h2>
        <br />
        <br />
        <div className="referalsContainer">
          <img src={Client1} alt="" className="referals-img1" />
          <img src={Client4} alt="" className="referals-img2" />
          <img src={Client2} alt="" className="referals-img3" />
          <img src={Client3} alt="" className="referals-img4" />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

About.propTypes = {
  className: PropTypes.string,
};

export default About;
