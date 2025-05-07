'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('membro_funcao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      membroId: {
        type: Sequelize.INTEGER
      },
      funcaoId: {
        type: Sequelize.INTEGER
      },
      dtInicio: {
        type: Sequelize.DATE
      },
      dtFim: {
        type: Sequelize.DATE
      },
      statusFuncao: {
        type: Sequelize.STRING
      },
      membroFuncaoId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('membro_funcao');
  }
};
