import { Model, DataTypes } from 'sequelize';
import IUser from '../../interfaces/IUser';
import { sequelize } from '../config/database';
import AccountModel from './AccountModel';
import TransactionModel from './TransactionModel';

interface UserModel extends IUser {}

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      field: 'username',
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    password: {
      type: DataTypes.STRING,
      field: 'password',
      allowNull: false,
      validate: {
        notEmpty: false,
      },
    },
    accountId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  },
  {
    tableName: 'Users',
    timestamps: false,
    sequelize,
  }
);

AccountModel.hasOne(UserModel, {foreignKey: {name: "accountId"}})
//UserModel.belongsTo(AccountModel)

export default UserModel;
