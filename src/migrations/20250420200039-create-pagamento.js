'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pagamento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pagamentoId: {
        type: Sequelize.INTEGER
      },
      descriPagamento: {
        type: Sequelize.STRING
      },
      vlPagamento: {
        type: Sequelize.INTEGER
      },
      dtPagamento: {
        type: Sequelize.DATE
      },
      statusPagamento: {
        type: Sequelize.STRING
      },
      transacaoId: {
        type: Sequelize.INTEGER
      },
      categoriaId: {
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
    await queryInterface.dropTable('pagamento');
  }
};
