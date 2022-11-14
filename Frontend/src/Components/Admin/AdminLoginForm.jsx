import React, { useState } from "react";
import Navbar from '../pages/AuthNavbar'
import { Button, Form, FormGroup, Label, Input, NavLink } from "reactstrap";
import { adminInfo } from "../../Redux/Actions/index";
import { useDispatch } from "react-redux";

const AdminLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const getAdmin = (e) => {
    e.preventDefault();
    if (password !== "" && username !== "") {
      dispatch(adminInfo({ password, username }));
    } else {
      alert("You have entered an incorrect email or password");
    }
  };

  return (
    <div>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1 style={{ textAlign: "center" }}>Admin form</h1>
      </div>
      <br />
      <div className="adminForm">
        <Form onSubmit={getAdmin}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="username"
              id="exampleEmail"
              placeholder="Admin username"
              onChange={(e) => setUsername(e.target.value)}
              // value={username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Admin password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
