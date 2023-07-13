// "use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          userID: "A0001",
          firstName: "Admin",
          lastName: "One",
          email: "adminone@gmail.com",
          password: "adminone123",
          userRole: "Admin",
          nic: "1234567890V",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: "A0002",
          firstName: "Admin",
          lastName: "Two",
          email: "admintwo@gmail.com",
          password: "admintwo123",
          userRole: "Admin",
          nic: "0987654321V",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("User", null, {});
  },
};
