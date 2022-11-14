// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


// <Form>
// <FormGroup>
//   <Label for="exampleEmail">Email</Label>
//   <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
// </FormGroup>
// <FormGroup>
//   <Label for="examplePassword">Password</Label>
//   <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
// </FormGroup>
// <FormGroup>
//   <Label for="exampleSelect">Select</Label>
//   <Input type="select" name="select" id="exampleSelect">
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//     <option>4</option>
//     <option>5</option>
//   </Input>
// </FormGroup>
// <FormGroup>
//   <Label for="exampleSelectMulti">Select Multiple</Label>
//   <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//     <option>4</option>
//     <option>5</option>
//   </Input>
// </FormGroup>
// <FormGroup>
//   <Label for="exampleText">Text Area</Label>
//   <Input type="textarea" name="text" id="exampleText" />
// </FormGroup>
// <FormGroup>
//   <Label for="exampleFile">File</Label>
//   <Input type="file" name="file" id="exampleFile" />
//   <FormText color="muted">
//     This is some placeholder block-level help text for the above input.
//     It's a bit lighter and easily wraps to a new line.
//   </FormText>
// </FormGroup>
// <FormGroup tag="fieldset">
//   <legend>Radio Buttons</legend>
//   <FormGroup check>
//     <Label check>
//       <Input type="radio" name="radio1" />{' '}
//       Option one is this and that—be sure to include why it's great
//     </Label>
//   </FormGroup>
//   <FormGroup check>
//     <Label check>
//       <Input type="radio" name="radio1" />{' '}
//       Option two can be something else and selecting it will deselect option one
//     </Label>
//   </FormGroup>
//   <FormGroup check disabled>
//     <Label check>
//       <Input type="radio" name="radio1" disabled />{' '}
//       Option three is disabled
//     </Label>
//   </FormGroup>
// </FormGroup>
// <FormGroup check>
//   <Label check>
//     <Input type="checkbox" />{' '}
//     Check me out
//   </Label>
// </FormGroup>
// <Button>Submit</Button>
// </Form>up


// // tooltip


// import React, { useState } from 'react';
// import { Tooltip } from 'reactstrap';

// function Example(args) {
//   const [tooltipOpen, setTooltipOpen] = useState(false);
//   const toggle = () => setTooltipOpen(!tooltipOpen);

//   return (
//     <div>
//       <p>
//         Somewhere in here is a{' '}
//         <a
//           href="https://example.com"
//           target="_blank"
//           rel="noreferrer"
//           id="TooltipExample"
//         >
//           tooltip
//         </a>
//         .
//       </p>
//       <Tooltip
//         {...args}
//         isOpen={tooltipOpen}
//         target="TooltipExample"
//         toggle={toggle}
//       >
//         Hello world!
//       </Tooltip>
//     </div>
//   );
// }

// Example.args = {
//   autohide: true,
//   flip: true,
// };

// Example.argTypes = {
//   placement: {
//     control: { type: 'select' },
//     options: ['top', 'left', 'right', 'bottom'],
//   },
// };

// export default Example;


// // Modal

// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import PropTypes from 'prop-types';

// function Example(props) {
//   const { className } = props;

//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   const closeBtn = (
//     <button className="close" onClick={toggle} type="button">
//       &times;
//     </button>
//   );

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>
//         Click Me
//       </Button>
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <ModalHeader toggle={toggle} close={closeBtn}>
//           Modal title
//         </ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>
//             Do Something
//           </Button>{' '}
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// Example.propTypes = {
//   className: PropTypes.string,
// };

// export default Example;


// //////////////////////// Spinners


// <Button
//   color="primary"
//   disabled
// >
//   <Spinner size="sm">
//     Loading...
//   </Spinner>
//   <span>
//     {' '}Loading
//   </span>
// </Button>