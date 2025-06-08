'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable({
      schema: 'catalogo',
      tableName: 'tema',
    }, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cve_tem: {
        type: Sequelize.INTEGER,
    },
    tema: {
        type: Sequelize.STRING,
    }
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable({
    schema: 'catalogo',
    tableName: 'tema'
   });
  }
};
