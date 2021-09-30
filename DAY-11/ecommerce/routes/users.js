var express = require("express");
var router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "knshi",
  host: "localhost",
  database: "my_database",
  password: "12345678",
  port: 5432,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query('SELECT * FROM "Users"', (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
