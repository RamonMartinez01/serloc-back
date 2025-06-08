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
          type: DataTypes.STRING,
         },
         VUL_0101: {
          type: DataTypes.DOUBLE,
         },
         VUL_0102: {
          type: DataTypes.STRING,
         },
         FCB_0101: {
          type: DataTypes.DOUBLE,
         },
         FCB_0102: {
          type: DataTypes.STRING,
         },
         FCB_0103: {
          type: DataTypes.DOUBLE,
         },
         FCB_0104: {
          type: DataTypes.DOUBLE,
         },
         FCB_0105: {
          type: DataTypes.DOUBLE,
         },
         FCB_0106: {
          type: DataTypes.DOUBLE,
         },
         FCB_0107: {
          type: DataTypes.DOUBLE,
         },
         FPI_0101: {
          type: DataTypes.DOUBLE,
         },
         FPI_0102: {
          type: DataTypes.STRING,
         },
         FPI_0103: {
          type: DataTypes.DOUBLE,
         },
         FPI_0104: {
          type: DataTypes.DOUBLE,
         },
         FPI_0105: {
          type: DataTypes.DOUBLE,
         },
         FRE_0101: {
          type: DataTypes.DOUBLE,
         },
         FRE_0102: {
          type: DataTypes.STRING,
         },
         FRE_0103:{
          type: DataTypes.DOUBLE,
         },
         FRE_0104: {
          type: DataTypes.DOUBLE,
         },
         FRE_0105: {
          type: DataTypes.DOUBLE,
         },
         FRE_0106:{
          type: DataTypes.DOUBLE,
         },
         FPT_0101: {
          type: DataTypes.DOUBLE,
         },
         FPT_0102: {
          type: DataTypes.STRING,
         },
         FPT_0103: {
          type: DataTypes.DOUBLE,
         },
         FPT_0104: {
          type: DataTypes.DOUBLE,
         },
         FPT_0105: {
          type: DataTypes.DOUBLE,
         },
         FPT_0106: {
          type: DataTypes.DOUBLE,
         },
         FPP_0101: {
          type: DataTypes.DOUBLE,
         },
         FPP_0102: {
          type: DataTypes.STRING,
         },
         FPP_0103: {
          type: DataTypes.DOUBLE,
         },
         FPP_0104: {
          type: DataTypes.DOUBLE,
         },
         FPP_0105: {
          type: DataTypes.DOUBLE,
         },
         FAN_0101: {
          type: DataTypes.DOUBLE,
         },
         FAN_0102: {
          type: DataTypes.STRING,
         },
         FAN_0103: {
          type: DataTypes.DOUBLE,
         },
         FAN_0104: {
          type: DataTypes.DOUBLE,
         },
         FAD_0101: {
          type: DataTypes.DOUBLE,
         },
         FAD_0102: {
          type: DataTypes.STRING,
         },
         FAD_0103: {
          type: DataTypes.DOUBLE,
         },
         FAD_0104: {
          type: DataTypes.DOUBLE,
         },
         FPE_0101: {
          type: DataTypes.DOUBLE,
         },
         FPE_0102: {
          type: DataTypes.STRING,
         },
         FPE_0103: {
          type: DataTypes.DOUBLE,
         },
         FPE_0104: {
          type: DataTypes.DOUBLE,
         },
         POBTOT: {
          type: DataTypes.INTEGER,
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
