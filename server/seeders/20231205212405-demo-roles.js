'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('roles', [
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
