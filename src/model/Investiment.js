import { Model, DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

class Investment extends Model {}
Investment.init({
  idInvestment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_inv'
  },
  nameInvestment: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name_inv'
  },
  typeInvestment: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'type_inv'
  },
  valueInvestment: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    field: 'value_inv'
  },
  dateInvestment: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'date_inv'
  }
}, {
  sequelize,
  modelName: 'Investment',
  tableName: 'investimentos',
  timestamps: false
});

export {Investment}