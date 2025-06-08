'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      {
        schema: 'ivp',
        tableName: 'loc_rur_2020',
      },
      {
        ID: {
          type: Sequelize.INTEGER,
          primaryKey: true
         },
         CGLOC: {
          type: Sequelize.STRING,
         },
         VUL_0101: {
          type: Sequelize.DOUBLE,
         },
         VUL_0102: {
          type: Sequelize.STRING,
         },
         FCB_0101: {
          type: Sequelize.DOUBLE,
         },
         FCB_0102: {
          type: Sequelize.STRING,
         },
         FCB_0103: {
          type: Sequelize.DOUBLE,
         },
         FCB_0104: {
          type: Sequelize.DOUBLE,
         },
         FCB_0105: {
          type: Sequelize.DOUBLE,
         },
         FCB_0106: {
          type: Sequelize.DOUBLE,
         },
         FCB_0107: {
          type: Sequelize.DOUBLE,
         },
         FPI_0101: {
          type: Sequelize.DOUBLE,
         },
         FPI_0102: {
          type: Sequelize.STRING,
         },
         FPI_0103: {
          type: Sequelize.DOUBLE,
         },
         FPI_0104: {
          type: Sequelize.DOUBLE,
         },
         FPI_0105: {
          type: Sequelize.DOUBLE,
         },
         FRE_0101: {
          type: Sequelize.DOUBLE,
         },
         FRE_0102: {
          type: Sequelize.STRING,
         },
         FRE_0103:{
          type: Sequelize.DOUBLE,
         },
         FRE_0104: {
          type: Sequelize.DOUBLE,
         },
         FRE_0105: {
          type: Sequelize.DOUBLE,
         },
         FRE_0106:{
          type: Sequelize.DOUBLE,
         },
         FPT_0101: {
          type: Sequelize.DOUBLE,
         },
         FPT_0102: {
          type: Sequelize.STRING,
         },
         FPT_0103: {
          type: Sequelize.DOUBLE,
         },
         FPT_0104: {
          type: Sequelize.DOUBLE,
         },
         FPT_0105: {
          type: Sequelize.DOUBLE,
         },
         FPT_0106: {
          type: Sequelize.DOUBLE,
         },
         FPP_0101: {
          type: Sequelize.DOUBLE,
         },
         FPP_0102: {
          type: Sequelize.STRING,
         },
         FPP_0103: {
          type: Sequelize.DOUBLE,
         },
         FPP_0104: {
          type: Sequelize.DOUBLE,
         },
         FPP_0105: {
          type: Sequelize.DOUBLE,
         },
         FAN_0101: {
          type: Sequelize.DOUBLE,
         },
         FAN_0102: {
          type: Sequelize.STRING,
         },
         FAN_0103: {
          type: Sequelize.DOUBLE,
         },
         FAN_0104: {
          type: Sequelize.DOUBLE,
         },
         FAD_0101: {
          type: Sequelize.DOUBLE,
         },
         FAD_0102: {
          type: Sequelize.STRING,
         },
         FAD_0103: {
          type: Sequelize.DOUBLE,
         },
         FAD_0104: {
          type: Sequelize.DOUBLE,
         },
         FPE_0101: {
          type: Sequelize.DOUBLE,
         },
         FPE_0102: {
          type: Sequelize.STRING,
         },
         FPE_0103: {
          type: Sequelize.DOUBLE,
         },
         FPE_0104: {
          type: Sequelize.DOUBLE,
         },
         POBTOT: {
          type: Sequelize.INTEGER,
         },
         ID_LOC: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'localidades',
              schema: 'loc',
            },
            key: 'ID_LOC',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
         },

      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: 'ivp',
      tableName: 'loc_rur_2020'
    })
  }
};
