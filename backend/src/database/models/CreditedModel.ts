import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import ICredited from '../../interfaces/IDebited';
import AccountModel from './AccountModel';

interface CreditedModel extends ICredited {}

class CreditedModel extends Model {}

CreditedModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    tableName: 'creditedAccountIds',
    timestamps: false,
    sequelize,
  }
);

export default CreditedModel;

CreditedModel.hasOne(AccountModel, {foreignKey: {name: "id"}})
