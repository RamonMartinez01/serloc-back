'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({
      schema: 'public',
      tableName: 'na',
    }, {
      ID_NA: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      CVE_NUCLEO: {
        type: Sequelize.STRING,
      },
      NOM_NUCLEO: {
        type: Sequelize.STRING,
      },
      CLV_UNIC_1: {
        type: Sequelize.STRING,
      },
      FOL_MATRIZ: {
        type: Sequelize.STRING,
      },
      TIPO: {
        type: Sequelize.STRING,
      },
      PROGRAMA: {
        type: Sequelize.STRING,
      },
      REP: {
        type: Sequelize.DOUBLE,
      },
      AEA_TOT: {
        type: Sequelize.DOUBLE,
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: 'public',
      tableName: 'na',
    });
  }
};
