'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endereco.init(
    {
      enderecoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'batismo_id'
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
