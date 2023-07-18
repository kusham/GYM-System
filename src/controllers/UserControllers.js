const { Sequelize } = require("sequelize");
const userRoles = require("../config/UserRoles");
const User = require("../models/UserModel");

//-------------------------get all users--------------------------
module.exports.getAllUsers = async (req, res) => {
  console.log("Get all users");
  try {
    const allUsers = await User.findAll({
      attributes: {
        exclude: ["password"], // Exclude the 'password' property
      },
    });

    res.status(200).json({
      success: true,
      message: "Users fetched Successfully.",
      users: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Users fetch failed",
      error: error.message,
    });
  }
};

//-------------------------get all members--------------------------
module.exports.getAllMembers = async (req, res) => {
  console.log("get all members");
  try {
    const allMembers = await User.findAll({
      where: { userRole: userRoles.MEMBER },
      attributes: {
        exclude: ["password"], // Exclude the 'password' property
      },
      include: [
        {
          model: User,
          as: "instructor",
          attributes: {
            exclude: ["password"], // Exclude the 'password' property
          },
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Members fetched Successfully.",
      users: allMembers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Members fetch failed",
      error: error.message,
    });
  }
};

//-------------------------get all Instructors--------------------------
module.exports.getAllInstructors = async (req, res) => {
  console.log("get all Instructors");
  try {
    const allInstructors = await User.findAll({
      where: { userRole: userRoles.INSTRUCTOR },
      attributes: {
        exclude: ["password"], // Exclude the 'password' property
      },
      include: [
        {
          model: User,
          as: "members",
          attributes: {
            exclude: ["password"], // Exclude the 'password' property
          },
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Instructors fetched Successfully.",
      users: allInstructors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Instructors fetch failed",
      error: error.message,
    });
  }
};

//-------------------------get member by ID--------------------------
module.exports.getMemberById = async (req, res) => {
  console.log("get member by ID");
  try {
    const member = await User.findOne({
      where: { userID: req.params.userID },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: User,
          as: "instructor",
          attributes: {
            exclude: ["password"], // Exclude the 'password' property
          },
        },
      ],
    });
    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found for the userID",
      });
    }
    res.status(200).json({
      success: true,
      message: "member fetched Successfully.",
      member: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "member fetch failed",
      error: error.message,
    });
  }
};

//-------------------------get instructor by ID--------------------------
module.exports.getInstructorById = async (req, res) => {
  console.log("get instructor by ID");
  try {
    const instructor = await User.findOne({
      where: { userID: req.params.userID },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: User,
          as: "members",
          attributes: {
            exclude: ["password"], // Exclude the 'password' property
          },
        },
      ],
    });
    if (!instructor) {
      return res.status(404).json({
        success: false,
        message: "instructor not found for the userID",
      });
    }
    res.status(200).json({
      success: true,
      message: "instructor fetched Successfully.",
      instructor: instructor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "instructor fetch failed",
      error: error.message,
    });
  }
};

//-------------------------get user count based on user roles--------------------------
module.exports.getUserCountForRoles = async (req, res) => {
  console.log("get user by ID");
  try {
    const userCounts = await User.findAll({
      attributes: [
        "userRole",
        [Sequelize.fn("COUNT", Sequelize.col("userID")), "count"],
      ],
      group: ["userRole"],
    }); // userCounts will contain an array of objects with 'role' and 'count' properties

    res.status(200).json({
      success: true,
      message: "user count fetched Successfully.",
      count: userCounts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User count fetch failed",
      error: error.message,
    });
  }
};

//-------------------------get New Registrants--------------------------
module.exports.getNewRegistrants = async (req, res) => {
  console.log("get New Registrants");
  try {
    const newRegistrants = await User.findAll({
      where: { userRole: userRoles.MEMBER, instructorId: null },
      attributes: {
        exclude: ["password"],
      },
    });

    res.status(200).json({
      success: true,
      message: "New Registrants fetched Successfully.",
      members: newRegistrants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "New Registrants fetch failed",
      error: error.message,
    });
  }
};

//-------------------------member assign To Instructor--------------------------
module.exports.assignToInstructor = async (req, res) => {
  console.log("member assign To Instructor");
  const { userID, instructorID } = req.body;
  try {
    const result = await User.update(
      { instructorId: instructorID }, // Update the desired property with the specified value
      { where: { userID: userID } }
    );

    if (result[0] === 1) {
      res.status(200).json({
        success: true,
        message: "Member assign To Instructor Successful.",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Member assign To Instructor not Successful.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Assign failed",
      error: error.message,
    });
  }
};



//-------------------------get Members Assign To the Instructor--------------------------
module.exports.getMembersAssignToInstructor = async (req, res) => {
  console.log("get Members Assign To the Instructor");
  try {
    const members = await User.findAll({
      where: { instructorId: req.params.id },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: User,
          as: "instructor",
          attributes: {
            exclude: ["password"], // Exclude the 'password' property
          },
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "members fetched Successfully.",
      members: members,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "members fetch failed",
      error: error.message,
    });
  }
};
