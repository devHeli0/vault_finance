'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Transactions', {
      id: {
        type: Sequelize.INTEGER,
        field: 'id',
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      debitedAccountId: {
        field: 'debitedAccountId',
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      creditedAccountId: {
        field: 'creditedAccountId',
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      value: {
        field: 'value',
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      createdAt:{
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};
