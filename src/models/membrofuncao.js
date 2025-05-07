'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MembroFuncao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MembroFuncao.init(
    {
      membroId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'membro_id'
      },
      funcaoId: {
        type: DataTypes.INTEGER,
        field: 'funcao_id'
      },
      dtInicio: {
        type: DataTypes.DATE,
        field: 'dt_inicio'
      },
      dtFim: {
        type: DataTypes.DATE,
        field: 'dt_fim'
      },
      statusFuncao: {
        type: DataTypes.STRING,
        field: 'status_funcao'
      },
      membroFuncaoId: {
        type: DataTypes.INTEGER,
        field: 'membro_funcao_id'
      }
    },
    {
      sequelize,
      modelName: 'MembroFuncao',
      tableName: 'membro_funcao',
      timestamps: false
    }
  );
  return MembroFuncao;
};
