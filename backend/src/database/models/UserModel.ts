import { Model, DataTypes } from 'sequelize';
import IUser from '../../interfaces/IUser';
import { sequelize } from '../config/database';
import AccountModel from './AccountModel';

interface UserModel extends IUser {}

class UserModel extends Model {
  static associate(models) {
    UserModel.hasOne(AccountModel, {
      foreignKey: { name: 'accountId' },
    });
  }
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      unique: true,
      autoIncrement: true,
      primaryKey: true,
      allowNull:true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      field: 'username',
      allowNull: false,
      validate: {
        notEmpty: true,
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
      field: 'accountId',
      unique: true,
      allowNull:true
    },
  },
  {
    tableName: 'Users',
    schema: 'NGAPP',
    timestamps: false,
    sequelize,
  }
);

//UserModel.belongsTo(AccountModel)

export default UserModel;
