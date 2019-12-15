var express = require("express");
var router = express.Router();

const viewFolder = "users";
const homeRoute = "/users";

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

//--- Show Blank Form -----------
router.get("/signup", (req, res, next) => {
  console.log(">Route singup - Show Blank Form");
  //console.log(">Show Blank");
  res.render(viewFolder + "/signup");
});

module.exports = router;
