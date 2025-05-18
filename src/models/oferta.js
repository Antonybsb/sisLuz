'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oferta extends Model {
    static associate(models) {
      Oferta.belongsTo(models.Membro, {
        foreignKey: 'membro_id'
      });
      Oferta.belongsTo(models.TransacaoFinanceira, {
        foreignKey: 'transacao_id'
      });
    }
  }
  Oferta.init(
    {
      ofertaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'oferta_id'
      },
      vlOferta: {
        type: DataTypes.INTEGER,
        field: 'vl_oferta'
      },
      dtOferta: {
        type: DataTypes.DATE,
        field: 'dt_oferta'
      },
      membroId: {
        type: DataTypes.INTEGER,
        field: 'membro_id'
      },
      transacaoId: {
        type: DataTypes.INTEGER,
        field: 'transacao_id'
      }
    },
    {
      sequelize,
      modelName: 'Oferta',
      tableName: 'oferta',
      timestamps: false
    }
  );
  return Oferta;
};
