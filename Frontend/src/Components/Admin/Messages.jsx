import React from "react";
import { Link } from "react-router-dom";
import Thabang from "../../Asserts/Thabang.png";

const Messages = () => {
  return (
    <div className="messages">
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
        </div>
        <br />

        <hr />
        <br />
        <div className="admin-links">
          <p>
            <Link to="/admin-gallery">Gallery</Link>
          </p>
          <p>
            <Link to="/admin-services">Services</Link>
          </p>
          <p>
            <Link to="/admin-pricing">Pricing</Link>
          </p>
          <p>
            <Link to="/admin-messages">Messages</Link>
          </p>
        </div>
      </div>

      {/* /////// */}

      <div className="side2">
        <br />
        <p className="sub-header2" style={{textAlign:"center", fontSize:"3rem"}}>Messages</p>
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start active"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Firstname Lastname Email</h5>
              <small>Date</small>
            </div>
            <div style={{ display: "grid" }}>
              <small>Select</small>
              <small>Category</small>
            </div>
            <div>
              <div className="underline"></div>
              <br />
              <p className="mb-1">Message</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Messages;
