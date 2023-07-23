const Equipment = require("../models/EquipmentModel");
const User = require("../models/UserModel");
const UserRequest = require("../models/UserRequests");

//-------------------------create Request--------------------------
module.exports.createRequest = async (req, res) => {
  console.log("create Request");
  try {
    const savedRequest = await UserRequest.create(req.body);
    res.status(200).json({
      success: true,
      message: "Request creation Successfully.",
      request: savedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request creation failed",
      error: error.message,
    });
  }
};

//-------------------------get All Requests--------------------------
module.exports.getAllRequests = async (req, res) => {
  console.log("get All Requests");
  try {
    const requests = await UserRequest.findAll();

    let elements = [];
    for (const element of requests) {
      const equipment = await Equipment.findOne({
        where: { id: element.equipmentId },
      });
      const member = await User.findOne({
        where: { userID: element.memberId },
      });
      elements.push({
        equipment: equipment.name,
        member: member.fullName,
        element,
      });
    }

    res.status(200).json({
      success: true,
      message: "Requests fetched Successfully.",
      requests: elements,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Requests fetch failed",
      error: error.message,
    });
  }
};

//-------------------------update Request--------------------------
module.exports.updateRequest = async (req, res) => {
  console.log("update Request");
  try {
    const result = await UserRequest.update(req.body, {
      where: { id: req.body.id },
    });

    if (result[0] == 1) {
      res.status(200).json({
        success: true,
        message: "Requests updated Successfully.",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Requests update failed.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Request update failed",
      error: error.message,
    });
  }
};

//-------------------------get All Requests by member--------------------------
module.exports.getAllRequestsByMember = async (req, res) => {
  console.log("get All Requests by member");
  try {
    const requests = await UserRequest.findAll({
      where: { memberId: req.params.id },
    });

    res.status(200).json({
      success: true,
      message: "Requests fetched Successfully.",
      requests: requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Requests fetch failed",
      error: error.message,
    });
  }
};

//-------------------------get All Requests by trainer--------------------------
module.exports.getAllRequestsByTrainer = async (req, res) => {
    console.log("get All Requests by trainer");
    try {
      const requests = await UserRequest.findAll();
  
      let elements = [];
      for (const element of requests) {
        const equipment = await Equipment.findOne({
          where: { id: element.equipmentId },
        });
        const member = await User.findOne({
          where: { userID: element.memberId },
        });
        elements.push({
          equipment: equipment.name,
          member: member.fullName,
          element,
        });
      }


      res.status(200).json({
        success: true,
        message: "Requests fetched Successfully.",
        requests: requests,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Requests fetch failed",
        error: error.message,
      });
    }
  };
