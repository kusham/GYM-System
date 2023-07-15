const Sequelize = require("sequelize");

const db = require("../config/DatabaseConnection");
// Define a model
var User = db.define(
  "user",
  {
    userID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    nic: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userRole: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dob: {
      type: Sequelize.DATE,
    },
    gender: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    weight: {
      type: Sequelize.FLOAT,
    },
    height: {
      type: Sequelize.FLOAT,
    },
    city: {
      type: Sequelize.STRING,
    },
    branch: {
      type: Sequelize.STRING,
    },
    purpose: {
      type: Sequelize.STRING,
    },
    personalInfo: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    freezeTableName: true,
  }
);

// Define the relationship
User.hasMany(User, {
  as: "members",
  foreignKey: {
    allowNull: true,
    name: "instructorId",
    unique: false,
  },
});
User.belongsTo(User, {
  as: "instructor",
  foreignKey: {
    allowNull: true,
    name: "instructorId",
    unique: false,
  },
});

module.exports = User;
