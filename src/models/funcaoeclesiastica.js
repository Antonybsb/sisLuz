'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FuncaoEclesiastica extends Model {
    static associate(models) {
      FuncaoEclesiastica.belongsToMany(models.Membro, {
        through: 'MembroFuncao',
        foreignKey: 'funcao_id'
      });
    }
  }
  FuncaoEclesiastica.init(
    {
      funcaoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'funcao_id'
      },
      nomeFuncao: {
        type: DataTypes.STRING,
        field: 'nome_funcao'
      }
    },
    {
      sequelize,
      modelName: 'FuncaoEclesiastica',
      tableName: 'funcao_eclesiastica',
      timestamps: false
    }
  );
  return FuncaoEclesiastica;
};
