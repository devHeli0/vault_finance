'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('DebitedAccountIds', {
      id: {
        type: Sequelize.INTEGER,
        field: 'Id',
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DebitedAccountIds');
  },
};
