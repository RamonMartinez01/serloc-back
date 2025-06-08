'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      {
        schema: 'loc',
        tableName: 'localidades',
      },
      {
        CVE_LOC: {
          type: Sequelize.STRING(80),
        },
        NOM_LOC: {
          type: Sequelize.STRING(80),
        },
        ALTITUD: {
          type: Sequelize.STRING(80),
        },
        POBTOT: {
          type: Sequelize.INTEGER,
        },
        ID_MUN: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'municipios',
              schema: 'edo_mun',
            },
            key: 'ID_MUN',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        ID_LOC: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        CGLOC: {
          type: Sequelize.STRING,
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: 'loc',
      tableName: 'localidades',
    });
  }
};
