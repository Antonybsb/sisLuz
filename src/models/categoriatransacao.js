'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaTransacao extends Model {
    static associate(models) {
      CategoriaTransacao.hasMany(models.TransacaoFinanceira, {
        foreignKey: 'categoria_id'
      });
      CategoriaTransacao.hasMany(models.Pagamento, {
        foreignKey: 'categoria_id'
      });
    }
  }
  CategoriaTransacao.init(
    {
      categoriaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'categoria_id'
      },
      nomeCategoria: {
        type: DataTypes.STRING,
        field: 'nome_categoria'
      }
    },
    {
      sequelize,
      modelName: 'CategoriaTransacao',
      tableName: 'categoria_transacao',
      timestamps: false
    }
  );
  return CategoriaTransacao;
};
