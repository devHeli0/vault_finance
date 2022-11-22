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
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
        refereces: {
          model: 'Accounts',
          key: 'id',
          as: 'debitedAccountId'
        },
      },
      creditedAccountId: {
        field: 'creditedAccountId',
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
        refereces: {
          model: 'Accounts',
          key: 'id',
          as: 'creditedAccountI'
        },
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
        field: 'createdAt',
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      updatedAt: {
        field: 'updatedAt',
        type: Sequelize.DATE,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};
