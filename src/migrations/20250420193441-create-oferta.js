'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('oferta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ofertaId: {
        type: Sequelize.INTEGER
      },
      vlOferta: {
        type: Sequelize.INTEGER
      },
      dtOferta: {
        type: Sequelize.DATE
      },
      membroId: {
        type: Sequelize.INTEGER
      },
      transacaoId: {
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
    await queryInterface.dropTable('oferta');
  }
};