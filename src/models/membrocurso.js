'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MembroCurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MembroCurso.init(
    {
      membroCursoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'membro_curso_id'
      },
      membroId: {
        type: DataTypes.INTEGER,
        field: 'membro_id'
      },
      cursoId: {
        type: DataTypes.INTEGER,
        field: 'curso_id'
      },
      statusCurso: {
        type: DataTypes.STRING,
        field: 'status_curso'
      }
    },
    {
      sequelize,
      modelName: 'MembroCurso',
      tableName: 'membro_curso',
      timestamps: false
    }
  );
  return MembroCurso;
};
