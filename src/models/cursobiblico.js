'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cursoBiblico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cursoBiblico.init(
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
      modelName: 'cursoBiblico',
      tableName: 'curso_biblico',
      timestamps: false
    }
  );
  return cursoBiblico;
};
