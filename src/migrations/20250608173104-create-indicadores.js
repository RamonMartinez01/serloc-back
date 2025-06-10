'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable({
      schema: 'catalogo',
      tableName: 'indicadores',
    }, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      cve_tem: {
        type: Sequelize.INTEGER,
      },
      cve_sub: {
        type: Sequelize.STRING,
      },
      indicadores: {
        type: Sequelize.STRING,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: 'catalogo',
      tableName: 'indicadores',
    });
  }
};
