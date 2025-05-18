'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    static associate(models) {
      Pagamento.belongsTo(models.TransacaoFinanceira, {
        foreignKey: 'categoria_id'
      });
      Pagamento.belongsTo(models.CategoriaTransacao, {
        foreignKey: 'transacao_id'
      });
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
