import React from "react";
import Navbar from "./Navbar";
import WhatsApp from "../../Asserts/WhatsApp.svg.png";
import FaceBook from "../../Asserts/Facebook.webp";
import Instagram from "../../Asserts/Instagram_logo_2016.svg.png";
import Twitter from "../../Asserts/Twitter-logo.svg.webp";
import Thabang from "../../Asserts/Thabang.png";


function Gallery() {
  const Images = [
    { name: { WhatsApp }, id: "one" },
    { name: { FaceBook }, id: "two" },
    { name: { Instagram }, id: "three" },
    { name: { Twitter }, id: "four" },
  ];

  let date = new Date();
  console.log(date)

  const getImages = () => {};

  return (
    <div className="gallery-container">
      <Navbar />

      <div>
        <div className="gallery-images-container">
          <div>
            <div className="categories-list">
              <br />
              <br />
              <br />
              <br />
              <h3
                className="sub-header2"
                style={{
                  paddingLeft: "1rem",
                  color: "black",
                  // textAlign: "center",
                }}
              >
                CATEGORIES
              </h3>
              <input
                type="search"
                placeholder="Search files"
                className="form-control search-input"
              />
              {/* <br /> */}
              <p href="">Photos</p>
              <p href="">Videos</p>
              <p href="">Project</p>

              {/* <br /> */}
              <h3
                className="sub-header2"
                style={{
                  paddingLeft: "1rem",
                  // textAlign: "center",
                  color: "black",
                }}
              >
                ALBUMS
              </h3>
              {/* <br /> */}
              <p href="">Wedding</p>
              <p href="">Parties</p>
              <p href="">Graduations</p>
              <p href="">Functions</p>
              
            </div>
          </div>

          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2
              style={{ textAlign: "center", color: "black" }}
              className="sub-header2"
            >
              ENTER AMAZING WORLD OF PHOTOS
            </h2>
            <hr />
            <br />
           
            <div className="categories">
                  {/* <p>{date}</p> */}
                <div className="categories-images">
                  {Images &&
                    Images.map((item, index) => {
                      return (
                        <div key={index}>
                          <img src={Thabang} alt="sdfsdf" />
                        </div>
                      );
                    })}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
