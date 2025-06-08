'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable({
      schema: 'ivp',
      tableName: 'loc_rur_mpio_2010',
    }, 
  {
    ID_MUN_2010: {
      type: Sequelize.INTEGER,
      primaryKey: true
     },
     CGMUN: {
      type: Sequelize.STRING,
     },
     VUL_0201: {
      type: Sequelize.DOUBLE,
     },
     VUL_0202: {
      type: Sequelize.STRING,
     },
     FCB_0201: {
      type: Sequelize.DOUBLE,
     },
     FCB_0202: {
      type: Sequelize.STRING,
     },
     FCB_0203: {
      type: Sequelize.DOUBLE,
     },
     FCB_0204: {
      type: Sequelize.DOUBLE,
     },
     FCB_0205: {
      type: Sequelize.DOUBLE,
     },
     FCB_0206: {
      type: Sequelize.DOUBLE,
     },
     FCB_0207: {
      type: Sequelize.DOUBLE,
     },
     FPI_0201: {
      type: Sequelize.DOUBLE,
     },
     FPI_0202: {
      type: Sequelize.STRING,
     },
     FPI_0203: {
      type: Sequelize.DOUBLE,
     },
     FPI_0204: {
      type: Sequelize.DOUBLE,
     },
     FPI_0205: {
      type: Sequelize.DOUBLE,
     },
     FRE_0201: {
      type: Sequelize.DOUBLE,
     },
     FRE_0202: {
      type: Sequelize.STRING,
     },
     FRE_0203:{
      type: Sequelize.DOUBLE,
     },
     FRE_0204: {
      type: Sequelize.DOUBLE,
     },
     FRE_0205: {
      type: Sequelize.DOUBLE,
     },
     FRE_0206:{
      type: Sequelize.DOUBLE,
     },
     FPT_0201: {
      type: Sequelize.DOUBLE,
     },
     FPT_0202: {
      type: Sequelize.STRING,
     },
     FPT_0203: {
      type: Sequelize.DOUBLE,
     },
     FPT_0204: {
      type: Sequelize.DOUBLE,
     },
     FPT_0205: {
      type: Sequelize.DOUBLE,
     },
     FPT_0206: {
      type: Sequelize.DOUBLE,
     },
     FPP_0201: {
      type: Sequelize.DOUBLE,
     },
     FPP_0202: {
      type: Sequelize.STRING,
     },
     FPP_0203: {
      type: Sequelize.DOUBLE,
     },
     FPP_0204: {
      type: Sequelize.DOUBLE,
     },
     FPP_0205: {
      type: Sequelize.DOUBLE,
     },
     FAN_0201: {
      type: Sequelize.DOUBLE,
     },
     FAN_0202: {
      type: Sequelize.STRING,
     },
     FAN_0203: {
      type: Sequelize.DOUBLE,
     },
     FAN_0204: {
      type: Sequelize.DOUBLE,
     },
     FAD_0201: {
      type: Sequelize.DOUBLE,
     },
     FAD_0202: {
      type: Sequelize.STRING,
     },
     FAD_0203: {
      type: Sequelize.DOUBLE,
     },
     FAD_0204: {
      type: Sequelize.DOUBLE,
     },
     FPE_0201: {
      type: Sequelize.DOUBLE,
     },
     FPE_0202: {
      type: Sequelize.STRING,
     },
     FPE_0203: {
      type: Sequelize.DOUBLE,
     },
     FPE_0204: {
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
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: 'ivp',
      tableName: 'loc_rur_mpio_2010'
    })
  }
};
