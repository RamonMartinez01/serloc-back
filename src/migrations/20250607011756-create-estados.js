'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      { schema: 'edo_mun', tableName: 'estados' },
      {
        ID_ENT: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        CVEGEO: {
          type: Sequelize.STRING(2),
          allowNull: true,
        },
        CVE_ENT: {
          type: Sequelize.STRING(2),
          allowNull: true,
        },
        NOMGEO: {
          type: Sequelize.STRING(80),
          allowNull: true,
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({ schema: 'edo_mun', tableName: 'estados' });
  }
};
