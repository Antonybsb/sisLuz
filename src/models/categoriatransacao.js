'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaTransacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
