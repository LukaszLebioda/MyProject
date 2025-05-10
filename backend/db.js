// creating connection to run queries with postgres

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "Wookie",
  password: "Wookie123?",
  host: "localhost",
  port: 5432,
  database: "mybooks",
});

module.exports = pool;
