import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Thabang from "../../Asserts/Thabang.png";

const Gallery = (props) => {
  const { handleDeleteImage, handleEditImage, handleChecks, showCategories } =
    props;
  const [input, setInputs] = useState({});
  const [image, setImage] = useState(null);
  const [select, setSelect] = useState("");
  const [categories, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const handleInputs = (e) => {
    if (image !== null && input !== "") {
      setList([...list, { id: 2, image, input, select, categories }]);
    } else {
      alert("File or file name is empty");
    }
  };

  console.log("list", list);

  const handleSearch = () => {
    let newFilterdList = list.filter((item) =>
      console.log("first", item.input === search)
    );
    setList([...newFilterdList]);
  };

  return (
    <div>
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

      <div className="side2">
        <br />
        <br />
        <div className="add-image-div">
          <label htmlFor="" className="sub-header2">
            Add file(Images or videos)
          </label>
          <br />

          <br />
          <input
            className="form-control"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            name="file"
          />
          <br />
          <label htmlFor="" className="sub-header2">
            Add file name
          </label>
          <br />
          <input
            type="text"
            className="form-control file-name"
            placeholder="File name"
            onChange={(e) => setInputs(e.target.value)}
            // value={addFile}
            name="filename"
          />
          <br />
          <FormGroup tag="fieldset" onChange={(e) => setSelect(e.target.value)}>
            <FormGroup check>
              <Label check>
                <Input type="radio" value="Special"  name="choose" /> Photos
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="Category"
                  name="choose"
                  onClick={handleChecks}
                />{" "}
                Videos
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="Category"
                  name="choose"
                  onClick={handleChecks}
                />{" "}
                Projects
              </Label>
            </FormGroup>
          </FormGroup>

          {showCategories ? (
            <div>
              <FormGroup
                tag="fieldset"
                onChange={(e) => setCategory(e.target.value)}
              >
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Arranging Videos"
                      name="Categories"
                    />{" "}
                    Arranging Videos
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Audio and Video message"
                      name="Categories"
                    />{" "}
                    Audio and Video message
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" value="Brochures" name="Categories" />{" "}
                    Brochures
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Corporate video and ads"
                      name="Categories"
                    />{" "}
                    Corporate video and ads
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Events and conferences"
                      name="Categories"
                    />{" "}
                    Events and conferences
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" value="Graduations" name="Categories" />{" "}
                    Graduations
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Music Videos"
                      name="Categories"
                    />{" "}
                    Music Videos
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Narration and editing"
                      name="Categories"
                    />{" "}
                    Narration and editing
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Personal events and functions"
                      name="Categories"
                    />{" "}
                    Personal events and functions
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Postcards and flyers"
                      name="Categories"
                    />{" "}
                    Postcards and flyers
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Posters and banners"
                      name="Categories"
                    />{" "}
                    Posters and banners
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Social media and websites"
                      name="Categories"
                    />{" "}
                    Social media and websites
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      value="Studio photo shoots"
                      name="Categories"
                    />{" "}
                    Studio photo shoots
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
          ) : (
            ""
          )}

          <br />
          <input
            type="button"
            className="btn btn-success"
            value="Add"
            onClick={handleInputs}
          />
        </div>
        <br />
        <div className="list-of-potos-container">
          <p className="sub-header2">List of photos and videos</p>
          <br />
          <input
            type="search"
            className="form-control search"
            placeholder="Search by file name"
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="button"
            className="btn btn-outline-primary switch-button"
            value="Search"
            onClick={handleSearch}
          />

          <br />
          <table className="list-of-photos sub-header2">
            <thead>
              <tr>
                <th className="sub-header2">File name</th>
                <th className="sub-header2">Date</th>
                <th>Role</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.input}</td>
                      <td>{Date() /*time*/ /*day */ /*month */ /*year */}</td>
                      <td>{item.select}</td>
                      <td>{item.categories}</td>
                      <td>
                        <input
                          type="button"
                          className="btn btn-info"
                          value="Edit"
                          onClick={handleEditImage}
                        />
                        <input
                          type="button"
                          className="btn btn-danger"
                          value="Delete"
                          onClick={handleDeleteImage}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
