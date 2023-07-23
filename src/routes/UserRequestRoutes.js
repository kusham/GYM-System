const express = require("express");
const { createRequest, getAllRequests, updateRequest, getAllRequestsByTrainer, getAllRequestsByMember } = require("../controllers/RequestControllers");

const router = express.Router();

router.get("/all", function (req, res) {
  res.send(
    "Hello World from API. \n /add \n /getall \n /update \n /delete \n /getById \n"
  );
});

router.post("/add", createRequest);
router.get("/getall",getAllRequests);
router.put("/reject/", updateRequest);
router.put("/accept/", updateRequest);

router.get("/getallByMember/:id",getAllRequestsByMember);
router.get("/getallByTrainer/:id",getAllRequestsByTrainer);


// router.delete("/delete/:id", deleteEquipmentById);
// router.get("/getById/:id", getEquipmentById);
// router.get("/available/getall", getAvailableEquipment);


module.exports = router;
