import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, NavLink } from "reactstrap";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import Logo from "../../Asserts/background2.jpg";

function ContactUs(props) {
  const { select } = props;

  const [constactForm, setContactForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    select: "",
    // category: "",
    message: "",
  });
  const [selected, setSelected] = useState([]);
  const [enable, setEnable] = useState("disabled");
  const [swalProps, setSwalProps] = useState({});

  // let dispatch = useDispatch();

  // const handleSelect = () => {
  //   if (constactForm.select === "GRAPHIC DESIGNING") {
  //     let services = [
  //       "Postcards and flyers",
  //       "Posters and banners",
  //       "Brochures (print and digital)",
  //       "Signage and trade show displays",
  //     ];
  //     setEnable("");
  //     setSelected(services);
  //   } else if (constactForm.select === "PHOTOGRAPHY") {
  //     let services1 = [
  //       "Events and conferences",
  //       "Corporate",
  //       "Studio photo shoots",
  //       "Personal events and functions",
  //     ];
  //     setEnable("");
  //     setSelected(services1);
  //   } else if (constactForm.select === "VIDEO PRODUCTION") {
  //     let services2 = [
  //       "Events and conferences",
  //       "Graduations and end year functions",
  //       "Personal Functions (e.g baby showers)",
  //       "Social media and websites",
  //       "Corporate video and ads",
  //       "Music Videos",
  //     ];
  //     setEnable("");
  //     setSelected(services2);
  //   } else if (constactForm.select === "MEDIA PRODUCTION") {
  //     let services3 = [
  //       "Arranging Videos",
  //       "Narration and editing",
  //       "Creating audio-visual products",
  //       "Audio and Video messages",
  //     ];
  //     setEnable("");
  //     setSelected(services3);
  //   }
  // };

  const handleChange = (e) => {
    setContactForm({
      ...constactForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formInfo = await axios.post(
      "http://localhost:7000/contact_form",
      constactForm
    );
    console.log("formInfo", formInfo);
    if (formInfo.data.message === "Form successfully submited") {
      Swal.fire("Good job!", "Form successfully submited we'll get back to you as soon as posible", "success");
    }
    return formInfo;
  };

  return (
    <div className="contact-container">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2 className="sub-header2" style={{ textAlign: "center" }}>
          CONTACT US FOR QUOTATIONS OR ENQUARIES
        </h2>
      </div>
      <br />
      <br />
      <div className="formContainer">
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label className="sub-header2" for="firstName">
                First name
              </Label>
              <Input
                value={constactForm.firstname}
                onChange={(e) => handleChange(e)}
                type="text"
                name="firstname"
              />
            </FormGroup>
            <FormGroup>
              <Label className="sub-header2" for="exampleEmail">
                Last name
              </Label>
              <Input
                value={constactForm.lastname}
                onChange={(e) => handleChange(e)}
                type="text"
                name="lastname"
              />
            </FormGroup>
            <FormGroup>
              <Label className="sub-header2">Email</Label>
              <Input
                value={constactForm.email}
                type="email"
                onChange={(e) => handleChange(e)}
                name="email"
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup>
              <Label className="sub-header2" for="exampleSelect">
                Select
              </Label>
              <Input
                value={constactForm.select}
                type="select"
                name="select"
                onChange={(e) => handleChange(e)}
                // onClick={handleSelect}
                className="sub-header2"
              >
                {select &&
                  select.map((item) => {
                    return (
                      <option
                        style={{ color: "white" }}
                        className="sub-header2"
                        disabled={item === "Select" ? "disabled" : ""}
                      >
                        {item}
                      </option>
                    );
                  })}
              </Input>
            </FormGroup>

            {/* <FormGroup>
              <Label className="sub-header2" for="exampleSelect">
                Categories
              </Label>
              <Input
                className="sub-header2"
                value={constactForm.category}
                onChange={(e) => handleChange(e)}
                type="select"
                name="Categories"
                style={{ color: "white" }}
                disabled={enable}
              >
                {selected &&
                  selected.map((item) => {
                    return (
                      <div>
                        <option className="sub-header2">{item}</option>
                      </div>
                    );
                  })}
              </Input>
            </FormGroup> */}
            <FormGroup>
              <Label className="sub-header2" for="exampleText">
                Message
              </Label>
              <Input
                value={constactForm.message}
                onChange={(e) => handleChange(e)}
                type="textarea"
                name="message"
              />
            </FormGroup>
            <button className="btn btn-outline-success success">Send</button>
          </Form>
        </div>
        <div className="contacts">
          <br />
          <h3 className="sub-header2">
            WHEN IT COMES TO TRANSFORMING YOUR VISION INTO REALITY, THERE IS
            ONLY ONE CONTACT.
          </h3>
          <br />
          <h3 className="sub-header2">ADDRESS</h3>
          <ul className="sub-header2" style={{ listStyle: "none" }}>
            <li>Physical Address: 20507</li>
            <li>Jakkalas dans</li>
            <li>Klipgat C</li>
            <li>Madibeng</li>
            <li>North West</li>
            <li>0202</li>
          </ul>
          <br />
          <h3 className="sub-header2">CONTACT</h3>
          <ul className="sub-header2" style={{ listStyle: "none" }}>
            <li>Tel: +27 79 3454 952</li>
          </ul>
          <br />
          <h3 className="sub-header2">EMAIL</h3>
          <ul className="sub-header2" style={{ listStyle: "none" }}>
            <li>eliaskhoza4@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
