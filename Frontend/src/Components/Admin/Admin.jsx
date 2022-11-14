import React, { useState } from "react";
import { Link } from "react-router-dom";
import Messages from "./Messages";
import Pricing from "./Pricing";
import Gallery from "./Gallery";
import Services from "./Services";
import Thabang from "../../Asserts/Thabang.png";

const Admin = (props) => {
  // const {
  //   handleImageAdd,
  //   handleDeleteImage,
  //   handleChange,
  //   handleEditImage,
  //   addService,
  //   addCategoryField,
  //   display,
  //   handleChecks,
  //   showCategories,
  // } = props;

  return (
    <div className="admin-container">
      <div className="side1">
        <br />
        <div className="avatar">
          <img src={Thabang} alt="Avatar" class="avatar" />
        </div>
        <p
          className="admin-name"
          style={{ color: "white", textAlign: "center", fontSize: "2rem" }}
        >
          Name and surname
        </p>
        <p
          className="file-number"
          style={{ color: "grey", textAlign: "center", fontSize: "1rem" }}
        >
          Number of files
        </p>
        <div className="upload">
          <input
            type=""
            className="btn btn-outline-info upload"
            value="Upload"
          />
          {/* <input type="file" /> */}
        </div>
        <br />

        <hr />
        <br />
        <div className="admin-links">
          <p><Link to="/admin-gallery">Gallery</Link></p>
          <p><Link to="/admin-services">Services</Link></p>
          <p><Link to="/admin-pricing">Pricing</Link></p>
          <p><Link to="/admin-messages">Messages</Link></p>
        </div>
      </div>
      <div className="side2">
        <h1>Side2</h1>
      </div>
    </div>
  );
};

export default Admin;
