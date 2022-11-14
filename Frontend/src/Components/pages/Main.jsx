import React, { useState } from "react";
import Pricing from "./Pricing";
import Gallery from "./Gallery";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import About from "./About";
import Admin from "../Admin/Admin";
import Home from "./Home";
import OurServices from "./OurServices";
import AuthPage from "./AuthPage";
import AdminGallery from "../Admin/Gallery";
import AdminServices from "../Admin/Services";
import AdminPricing from "../Admin/Pricing";
import AdminMessages from "../Admin/Messages";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Main() {
  const [select] = useState([
    "Select",
    "GRAPHIC DESIGNING",
    "PHOTOGRAPHY",
    "VIDEO PRODUCTION",
    "MEDIA PRODUCTION",
  ]);
  const [display, setDisplay] = useState("none");
  const [showCategories, setShowCategories] = useState(false);

  const addService = () => {
    console.log("Service");
  };

  const addCategoryField = () => {
    console.log("addCategoryField");
    setDisplay("block");
    return (document.getElementById(
      "field"
    ).innerHTML += `<Input type="text" name="category" placeholder="Enter category" />
`);

    {
      /* <Input type="text" name="category"  placeholder="Enter category" /> */
    }
  };

  const handleImageAdd = () => {
    console.log("first");
  };

  const handleDeleteImage = () => {
    console.log("deleete");
  };

  const handleEditImage = () => {
    console.log("edit");
  };

  const handleChecks = () => {
    setShowCategories(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/services" element={<OurServices />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route
            exact
            path="/contact"
            element={<ContactUs select={select} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/admin-messages"
            element={<AdminMessages />}
          />{" "}
          <Route exact path="/admin-gallery" element={<AdminGallery />} />{" "}
          <Route exact path="/admin-services" element={<AdminServices />} />
          <Route exact path="/admin-pricing" element={<AdminPricing />} />
          <Route
            exact
            path="/admin"
            element={
              <Admin
                handleChecks={handleChecks}
                handleImageAdd={handleImageAdd}
                handleEditImage={handleEditImage}
                handleDeleteImage={handleDeleteImage}
                addService={addService}
                addCategoryField={addCategoryField}
                display={display}
                showCategories={showCategories}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;
