'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    static associate(models) {
      Endereco.hasMany(models.Membro, {
        foreignKey: 'endereco_id'
      });
    }
  }
  Endereco.init(
    {
      enderecoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'endereco_id'
      },
      cep: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.CHAR,
      numero: DataTypes.INTEGER,
      membroId: {
        type: DataTypes.STRING,
        field: 'membro_id'
      }
    },
    {
      sequelize,
      modelName: 'Endereco',
      tableName: 'endereco',
      timestamps: false
    }
  );
  return Endereco;
};
