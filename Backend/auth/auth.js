const { secretePassword } = require("../security/secretPassword");
const {
  saveAdmin,

} = require("../queries/queris");
// const { secretToken } = require("../security/jwt");
require("dotenv").config();

const registrationAuth = (app) => {
  app.post("/register_admin", async (req, res) => {
    try {
      const {
        lastname,
        firstname,
        email,
        username,
        password,
      } = req.body;

      // let emailCheck =
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // let oldAdmin = email && (await checkIfStudentExist(email));
      // let hashedPassword = await secretePassword(password);
      // // let identityCheck = await checkUsernameExist(username);

      // // console.log('old admin ', oldAdmin);
      const admin = {
        lastname,
        firstname,
        email,
        username,
        password
        // password: hashedPassword,
      };

      console.log('admin', admin)
      // if (!(email.toLowerCase().match(emailCheck))) {
      //   return res.send("enter correct email address format").status(401);
      // }
      // if ((lastName, firstName, email, username, password) == null) {
      //   return res.sendStatus(404);
      // } 
      // else if (oldAdmin.length >= 0) {
      //   return res.send({ message: "User already exist" }).status(400);
      // }
      //  else if (identityCheck.length > 0) {
      //   return res.send({ message: "Id number already exist" }).status(400);
      //  else if (password !== confirmPassword) {
      //   return res.send({ message: "Password did not match" });
      // } 
      // else {
        console.log("save admin",await saveAdmin(admin));
        // console.log('admin_id', admin_id)
        // res.send({ data: admin_id, status: 201 });
        // const token = secretToken(admin_id);
        // return res.send({ error: null, token: token });
      // }
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  // app.post("/register_admin", async (req, res) => {
  //   try {
  //     const {
  //       lastName,
  //       firstName,
  //       idNumber,
  //       email,
  //       password,
  //       confirmPassword,
  //     } = req.body;
  //     let oldAdmin = email && (await checkIfAdminExist(email));

  //     let hashedPassword = await secretePassword(password);
  //     admin = {
  //       lastName,
  //       firstName,
  //       idNumber,
  //       email,
  //       password: hashedPassword,
  //     };

  //     // console.log("oldAdmin :>> ", oldAdmin);

  //     // console.log("tumi ", admin);
  //     if ((lastName, firstName, email, idNumber, password) == null) {
  //       return res.sendStatus(404);
  //     } else if (oldAdmin.length > 0) {
  //       return res.send({ message: "Admin already exist" }).status(400);
  //     } else if (password !== confirmPassword) {
  //       return res.send({ message: "Password did not match" });
  //     } else {
  //       const admin_id = await saveAdmin(admin);
  //       res.send({ data: admin_id, status: 201 });
  //       const token = secretToken(admin_id);
  //       return res.send({ error: null, token: token });
  //     }
  //   } catch (e) {
  //     res.sendStatus(500);
  //   }
  // });
};

module.exports = { registrationAuth };