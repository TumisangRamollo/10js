const { Pool } = require("pg");

const pool = new Pool({
  user: "tumi",
  host: "localhost",
  database: "admin",
  password: "tumisang",
  port: 5432,
});

const getClient = async () => {
  const client = await pool.connect();
  // console.log('getClient', client)
  return client;
};


module.exports = {
  getClient,
};