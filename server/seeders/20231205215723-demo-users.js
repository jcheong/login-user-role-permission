'use strict';
const bcrypt = require('bcrypt');

const hash = bcrypt.hashSync('123456', 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        firstName: 'admin',
        password: hash,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jhonny',
        firstName: 'jhonny',
        password: hash,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};