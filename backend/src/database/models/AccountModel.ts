import { Model, DataTypes } from 'sequelize';
import IAccount from '../../interfaces/IAccount';
import { sequelize } from '../config/database';

interface AccountModel extends IAccount {}

class AccountModel extends Model {
  static associate(models) {
    AccountModel.belongsTo(models.UserModel, {
      foreignKey: 'id',
    });
    AccountModel.hasMany(models.TransactionModel, {
      foreignKey: 'debitedAccountId' && 'creditedAccountId',
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
      allowNull:true
    },
    balance: {
      type: DataTypes.FLOAT,
    },
  },
  {
    tableName: 'Accounts',
    schema: 'NGAPP',
    timestamps: false,
    sequelize,
  }
);

export default AccountModel;
