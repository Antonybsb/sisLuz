'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dizimo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dizimo.init(
    {
      dizimoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'dizimo_id'
      },
      vlDizimo: {
        type: DataTypes.INTEGER,
        field: 'vl_dizimo'
      },
      dtDizimo: {
        type: DataTypes.DATE,
        field: 'dt_dizimo'
      },
      membroId: {
        type: DataTypes.INTEGER,
        field: 'membro_id'
      }
    },
    {
      sequelize,
      modelName: 'dizimo',
      tableName: 'dizimo',
      timestamps: false
    }
  );
  return dizimo;
};
