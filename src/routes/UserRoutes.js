var express = require("express");
const { registerUser, loginUser } = require("../controllers/AuthControllers");
const {
  getAllUsers,
  getAllMembers,
  getAllInstructors,
  getUserById,
  getUserCountForRoles,
  getMemberById,
  getInstructorById,
  getNewRegistrants,
  assignToInstructor,
} = require("../controllers/UserControllers");
var router = express.Router();

router.get("/all", function (req, res) {
  res.send("Hello World from API. \n /registerUser \n /loginUser \n ");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/getall", getAllUsers);
router.get("/getallMembers", getAllMembers);
router.get("/getallInstructors", getAllInstructors);
router.get("/getMemberById/:userID", getMemberById);
router.get("/getInstructorById/:userID", getInstructorById);
router.get("/getUserCountForRoles", getUserCountForRoles);
router.get("/getNewRegistrants", getNewRegistrants);

router.put("/assignToInstructor", assignToInstructor);


module.exports = router;
