'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('membro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dt_entrada: {
        type: Sequelize.DATE
      },
      convertido_local: {
        type: Sequelize.BOOLEAN
      },
      nome_membro: {
        type: Sequelize.STRING
      },
      tipo_membro: {
        type: Sequelize.STRING
      },
      nome_pai: {
        type: Sequelize.STRING
      },
      nome_mae: {
        type: Sequelize.STRING
      },
      dt_nascimento: {
        type: Sequelize.DATE
      },
      cpf: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      matricula: {
        type: Sequelize.STRING
      },
      endereco_id: {
        type: Sequelize.INTEGER
      },
      batismo_id: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('membro');
  }
};
