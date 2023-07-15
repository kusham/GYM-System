const Sequelize = require("sequelize");

const db = require("../config/DatabaseConnection");
// Define a model
var Equipment = db.define(
  "equipment",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    totalCount: {
      type: Sequelize.INTEGER,
    },
    availableCount: {
      type: Sequelize.INTEGER,
    },
    description: {
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

module.exports = Equipment;
