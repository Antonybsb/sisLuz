'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membro extends Model {
    static associate(models) {
      Membro.belongsTo(models.Endereco, {
        foreignKey: 'endereco_id'
      });
      Membro.belongsTo(models.Batismo, {
        foreignKey: 'membro_id'
      });
      Membro.hasMany(models.Dizimo, {
        foreignKey: 'membro_id'
      });
      Membro.hasMany(models.Oferta, {
        foreignKey: 'membro_id'
      });
      Membro.belongsToMany(models.CursoBiblico, {
        through: 'MembroCurso'
      });
    }
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
