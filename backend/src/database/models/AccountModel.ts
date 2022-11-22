import { Model, DataTypes } from 'sequelize';
import IAccount from '../../interfaces/IAccount';
import { sequelize } from '../config/database';

interface AccountModel extends IAccount {}

class AccountModel extends Model {
  static associate(models) {
    AccountModel.belongsTo(models.UserModel, {
      foreignKey: 'id',
    });

  }
}

AccountModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      unique: true,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: false,
      },
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
