'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      {
        schema: 'edo_mun',
        tableName: 'municipios',
      },
      {
        ID_MUN: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        CVEGEO: {
          type: Sequelize.STRING(3),
          allowNull: true,
        },
        NOMGEO: {
          type: Sequelize.STRING(80),
          allowNull: true,
        },
        ID_ENT: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: {
              schema: 'edo_mun',
              tableName: 'estados',
            },
            key: 'ID_ENT',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: 'edo_mun',
      tableName: 'municipios',
    });
  }
};
