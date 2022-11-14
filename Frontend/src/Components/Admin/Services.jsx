import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Services = (props) => {
  const { addService, addCategoryField, display , handleChange,  } = props;
  return (
    <div>
      <div className="admin-add-services">
        <p className="sub-header2">Add service</p>
        <Form>
          <FormGroup>
            <Label for="">Title</Label>
            <Input
              type="text"
              onChange={(e) => handleChange(e)}
              name="title"
              // value={categories.title}
              placeholder="Enter title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="">Category</Label>
            <div
              style={{ display: `${display}` }}
              id="field"
              className="input-fields"
            ></div>
            {/* <Input type="text" name="category"  placeholder="Enter category" /> */}
          </FormGroup>

          {/* <FormGroup>
   <Label for="exampleFile">File</Label>
   <Input type="file" name="file" id="exampleFile" />
   <FormText color="muted">
     This is some placeholder block-level help text for the above input.
     It's a bit lighter and easily wraps to a new line.
   </FormText>
 </FormGroup> */}

          <p className="add-field" onClick={addCategoryField}>
            Add category field
          </p>
          <br />
          <input
            type="button"
            className="btn btn-outline-success"
            onClick={addService}
            value="Add service"
          />
        </Form>
      </div>
    </div>
  );
};

export default Services;
