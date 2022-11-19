'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        field: 'id',
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        field: 'username',
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        field: 'password',
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      accountId: {
        field: 'accountId',
        type: Sequelize.INTEGER,
        unique: true,
        refereces: {
          model: 'Accounts',
          key: 'id',
          as: 'accountId'
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
