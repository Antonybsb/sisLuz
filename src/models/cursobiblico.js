'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CursoBiblico extends Model {
    static associate(models) {
      CursoBiblico.belongsToMany(models.Membro, {
        through: 'MembroCurso',
        foreignKey: 'curso_id'
      });
    }
  }
  CursoBiblico.init(
    {
      cursoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'curso_id'
      },
      nomeCurso: {
        type: DataTypes.STRING,
        field: 'nome_curso'
      }
    },
    {
      sequelize,
      modelName: 'CursoBiblico',
      tableName: 'curso_biblico',
      timestamps: false
    }
  );
  return CursoBiblico;
};
