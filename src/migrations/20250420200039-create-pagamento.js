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
    await queryInterface.dropTable('pagamento');
  }
};
