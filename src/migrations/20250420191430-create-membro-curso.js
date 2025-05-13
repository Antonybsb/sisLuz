'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('membro_curso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      membroCursoId: {
        type: Sequelize.INTEGER
      },
      statusCurso: {
        type: Sequelize.STRING
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
      curso_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'curso',
          key: 'curso_id'
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
    await queryInterface.dropTable('membro_curso');
  }
};
