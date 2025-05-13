'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transacao_financeira', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transacaoId: {
        type: Sequelize.INTEGER
      },
      vlTransacao: {
        type: Sequelize.INTEGER
      },
      dtTransacao: {
        type: Sequelize.DATE
      },
      tpTransacao: {
        type: Sequelize.STRING
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'CategoriaTransacao',
          key: 'categoria_id'
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
    await queryInterface.dropTable('transacao_financeira');
  }
};
