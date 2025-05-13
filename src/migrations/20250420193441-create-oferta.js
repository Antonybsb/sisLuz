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
      membro_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'membro',
          key: 'membro_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      transacao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TransacaoFinanceira',
          key: 'transacao_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
