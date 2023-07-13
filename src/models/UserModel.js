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
      type: Sequelize.STRING,
    },
    height: {
      type: Sequelize.STRING,
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
    createdAt: "CreatedAt",
    updatedAt: "UpdatedAt",
    freezeTableName: true,
  }
);

module.exports = User;
