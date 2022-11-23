import { Model, DataTypes, Transaction } from 'sequelize';
import { sequelize } from '../config/database';
import ITransaction from '../../interfaces/ITransaction';
import AccountModel from './AccountModel';

interface TransactionModel extends ITransaction {}

class TransactionModel extends Model {
  static associate(models) {
    TransactionModel.belongsTo(models.AccountModel, {
      foreignKey: 'debitedAccountId' && 'creditedAccountId',
    });
  }
}
TransactionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      unique: true,
      autoIncrement: true,
      primaryKey: true,
      allowNull:true
    },
    debitedAccountId: {
      field: 'debitedAccountId',
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    creditedAccountId: {
      field: 'creditedAccountId',
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    value: {
      field: 'value',
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      field: 'createdAt',
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    updatedAt: {
      field: 'updatedAt',
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: false,
      },
    },
  },
  {
    tableName: 'Transactions',
    schema: 'NGAPP',
    timestamps: true,
    sequelize,
  }
);

export default TransactionModel;

// TransactionModel.belongsTo(AccountModel, {
//   foreignKey: 'debitedAccountId'
// });
// TransactionModel.belongsTo(AccountModel, {
//   foreignKey: 'creditedAccountId'
// });

// AccountModel.hasMany(TransactionModel, {
//   foreignKey: { name: 'creditedAccountId' },
// });
//AccountModel.hasMany(TransactionModel, {
//foreignKey: { name: 'debitedAccountId' },
//});
