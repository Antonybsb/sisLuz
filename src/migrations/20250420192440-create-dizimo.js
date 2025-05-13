'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dizimo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dizimoId: {
        type: Sequelize.INTEGER
      },
      vlDizimo: {
        type: Sequelize.INTEGER
      },
      dtDizimo: {
        type: Sequelize.DATE
      },
      membroId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('dizimo');
  }
};
