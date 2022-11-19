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
    },
    debitedAccountId: {
      field: 'debitedAccountId',
      type: DataTypes.INTEGER,
      unique: false,
    },
    creditedAccountId: {
      field: 'creditedAccountId',
      type: DataTypes.INTEGER,
      unique: false,
    },
    value: {
      field: 'value',
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    tableName: 'Transactions',
    timestamps: true,
    sequelize,
  }
);

export default TransactionModel;

// AccountModel.hasMany(TransactionModel, {
//   foreignKey: { name: 'creditedAccountId' },
// });
// AccountModel.hasMany(TransactionModel, {
//   foreignKey: { name: 'debitedAccountId' },
// });
