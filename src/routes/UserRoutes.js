var express = require("express");
const { registerUser, loginUser } = require("../controllers/UserControllers");
var router = express.Router();

router.get("/all", function (req, res) {
  res.send(
    "Hello World from API. \n /registerUser \n /loginUser \n "
  );
});

router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;
