'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransacaoFinanceira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransacaoFinanceira.init(
    {
      transacaoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'transacao_financeira'
      },
      vlTransacao: {
        type: DataTypes.INTEGER,
        field: 'vl_transacao'
      },
      dtTransacao: {
        type: DataTypes.DATE,
        field: 'dt_transacao'
      },
      tpTransacao: {
        type: DataTypes.STRING,
        field: 'tp_transacao'
      },
      categoriaId: {
        type: DataTypes.INTEGER,
        field: 'categoria_id'
      }
    },
    {
      sequelize,
      modelName: 'TransacaoFinanceira',
      tableName: 'transacao_financeira',
      timestamps: false
    }
  );
  return TransacaoFinanceira;
};
