import { Model, DataTypes } from 'sequelize';
import IAccount from '../../interfaces/IAccount';
import TransactionModel from './TransactionModel'
import { sequelize } from '../config/database';

interface AccountModel extends IAccount {}

class AccountModel extends Model {}

AccountModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.FLOAT,
    },
  },
  {
    tableName: 'Accounts',
    timestamps: false,
    sequelize,
  }
);

export default AccountModel;

