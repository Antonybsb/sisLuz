'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class batismo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  batismo.init(
    {
      batismoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'batismo_id'
      },
      dtBatismo: {
        type: DataTypes.DATE,
        field: 'dt_batismo'
      },
      localBatismo: {
        type: DataTypes.STRING,
        field: 'local_batismo'
      }
    },
    {
      sequelize,
      modelName: 'batismo',
      tableName: 'batismo',
      timestamps: false
    }
  );
  return batismo;
};
