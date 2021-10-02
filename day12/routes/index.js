var express = require("express");
var router = express.Router();
const registerInitialChecks = require("../middlewares/registerChecks");
const register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  const session = req.session;
  session.username = "demo";
  res.render("index", { title: "Express" });
});

router.get("/test", (req, res) => {
  console.log("Redis Client", req.session.username);
  res.render("index", { title: "Express" });
});

router.post("/register", registerInitialChecks, register);

module.exports = router;