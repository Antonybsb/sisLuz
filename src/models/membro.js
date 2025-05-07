'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Membro.init(
    {
      membroId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'membro_id'
      },
      dtEntrada: {
        type: DataTypes.DATE,
        field: 'dt_entrada'
      },
      convertidoLocal: {
        type: DataTypes.BOOLEAN,
        field: 'convertido_local'
      },
      nomeMembro: {
        type: DataTypes.STRING,
        field: 'nome_membro'
      },
      tipoMembro: {
        type: DataTypes.STRING,
        field: 'tipo_membro'
      },
      nomePai: {
        type: DataTypes.STRING,
        field: 'nome_pai'
      },
      nomeMae: {
        type: DataTypes.STRING,
        field: 'nome_mae'
      },
      dtNascimento: {
        type: DataTypes.DATE,
        field: 'dt_nascimento'
      },
      cpf: {
        type: DataTypes.STRING
      },
      rg: {
        type: DataTypes.STRING
      },
      matricula: {
        type: DataTypes.STRING
      },
      enderecoId: {
        type: DataTypes.INTEGER,
        field: 'endereco_id'
      },
      batismoId: {
        type: DataTypes.INTEGER,
        field: 'batismo_id'
      },
      email: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Membro',
      tableName: 'membro',
      timestamps: false
    }
  );
  return Membro;
};
