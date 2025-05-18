'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dizimo extends Model {
    static associate(models) {
      Dizimo.belongsTo(models.Membro, {
        foreignKey: 'membro_id'
      });
    }
  }
  Dizimo.init(
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
      modelName: 'Dizimo',
      tableName: 'dizimo',
      timestamps: false
    }
  );
  return Dizimo;
};
