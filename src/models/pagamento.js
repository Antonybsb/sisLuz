'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pagamento.init(
    {
      pagamentoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'pagamento_id'
      },
      descriPagamento: {
        type: DataTypes.STRING,
        field: 'descri_pagamento'
      },
      vlPagamento: {
        type: DataTypes.INTEGER,
        field: 'vl_pagamento'
      },
      dtPagamento: {
        type: DataTypes.DATE,
        field: 'dt_pagamento'
      },
      statusPagamento: {
        type: DataTypes.STRING,
        field: 'status_pagamento'
      },
      transacaoId: {
        type: DataTypes.INTEGER,
        field: 'transacao_id'
      },
      categoriaId: {
        type: DataTypes.INTEGER,
        field: 'categoria_id'
      }
    },
    {
      sequelize,
      modelName: 'Pagamento',
      tableName: 'pagamento',
      timestamps: false
    }
  );
  return Pagamento;
};
