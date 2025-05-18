'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransacaoFinanceira extends Model {
    static associate(models) {
      TransacaoFinanceira.hasMany(models.Oferta, {
        foreignKey: 'transacao_id'
      });
      TransacaoFinanceira.hasMany(models.Dizimo, {
        foreignKey: 'transacao_id'
      });
      TransacaoFinanceira.hasMany(models.Pagamento, {
        foreignKey: 'transacao_id'
      });
      TransacaoFinanceira.belongsTo(models.CategoriaTransacao, {
        foreignKey: 'categoria_id'
      });
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
