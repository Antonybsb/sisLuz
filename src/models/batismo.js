'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Batismo extends Model {
    static associate(models) {
      Batismo.hasMany(models.Membro, {
        foreignKey: 'batismo_id'
      });
    }
  }
  Batismo.init(
    {
      batismoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'batismo_id'
      },
      dtBatismo: {
        type: DataTypes.DATE,
        field: 'dt_batismo'
      },
      localBatismo: {
        type: DataTypes.STRING,
        field: 'local_batismo'
      }
    },
    {
      sequelize,
      modelName: 'Batismo',
      tableName: 'batismo',
      timestamps: false
    }
  );
  return Batismo;
};
