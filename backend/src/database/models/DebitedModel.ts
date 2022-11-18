import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import IDebited from '../../interfaces/IDebited';
import AccountModel from './AccountModel';

interface DebitedModel extends IDebited {}

class DebitedModel extends Model {}

DebitedModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
 },
  {
    tableName: 'creditedAccountsIds',
    timestamps: false,
    sequelize,
  }
);


export default DebitedModel;

DebitedModel.hasOne(AccountModel, {foreignKey: {name: "id"}})