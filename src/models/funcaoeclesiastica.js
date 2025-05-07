'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcaoEclesiastica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  funcaoEclesiastica.init(
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
      modelName: 'funcaoEclesiastica',
      tableName: 'funcao_eclesiastica',
      timestamps: false
    }
  );
  return funcaoEclesiastica;
};
