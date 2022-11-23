'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Accounts', {
      id: {
        type: Sequelize.INTEGER,
        field: 'id',
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      balance: {
        field: 'balance',
        type: Sequelize.FLOAT,
        defaultValue: 100.0,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Accounts');
  },
};
