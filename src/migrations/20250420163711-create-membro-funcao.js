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
      funcao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'funcao',
          key: 'funcao_id'
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
    await queryInterface.dropTable('membro_funcao');
  }
};
