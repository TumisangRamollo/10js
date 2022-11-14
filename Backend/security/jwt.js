const jwt = require("jsonwebtoken");
require('dotenv').config()
const secretValue = process.env.SECRET_VALUE

const secretToken = (admin, email) => {
    const token =  jwt.sign(
        { admin_id: admin_id, email },
        secretValue,
        {
          expiresIn: "2h",
        }
      );
    return  admin.token = token;
 }


module.exports ={secretToken}