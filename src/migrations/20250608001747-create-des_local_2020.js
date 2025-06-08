'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      {
        tableName: 'des_local_2020',
        schema: 'ivp',
      },
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        CGLOC:{
          type: Sequelize.STRING,
         },
        PTL_0101: {
          type: Sequelize.STRING,
         },
        TPU_0102: {
          type: Sequelize.STRING,
         },
        ABS_0101: {
          type: Sequelize.STRING,
         },
        ABS_0102: {
          type: Sequelize.STRING,
         },
        ABS_0106: {
          type: Sequelize.STRING,
         },
        ABS_0107: {
          type: Sequelize.STRING,
         },
        ABS_0110: {
          type: Sequelize.STRING,
         },
        COM_0101: {
          type: Sequelize.STRING,
         },
        COM_0103: {
          type: Sequelize.STRING,
         },
        COM_0104: {
          type: Sequelize.STRING,
         },
        COM_0109: {
          type: Sequelize.STRING,
         },
        SAS_0101: {
          type: Sequelize.STRING,
         },
        SAS_0102: {
          type: Sequelize.STRING,
         },
        SAS_0103: {
          type: Sequelize.STRING,
         },
        TEL_0101: {
          type: Sequelize.STRING,
         },
        TEL_0102: {
          type: Sequelize.STRING,
         },
        TEL_0103: {
          type: Sequelize.STRING,
         },
        TEL_0106: {
          type: Sequelize.STRING,
         },
        AEC_0101: {
          type: Sequelize.STRING,
         },
        AEC_0301: {
          type: Sequelize.STRING,
         },
        AEC_0302: {
          type: Sequelize.STRING,
         },
        AEC_0303: {
          type: Sequelize.STRING,
         },
        AUT_0101: {
          type: Sequelize.STRING,
         },
        AUT_0102: {
          type: Sequelize.STRING,
         },
        AUT_0103: {
          type: Sequelize.STRING,
         },
        AUT_0104: {
          type: Sequelize.STRING,
         },
        CON_0101: {
          type: Sequelize.STRING,
         },
        CON_0102: {
          type: Sequelize.STRING,
         },
        CON_0103: {
          type: Sequelize.STRING,
         },
        CON_0104: {
          type: Sequelize.STRING,
         },
        FEN_0101: {
          type: Sequelize.STRING,
         },
        FEN_0102: {
          type: Sequelize.STRING,
         },
        FEN_0103: {
          type: Sequelize.STRING,
         },
        FEN_0104: {
          type: Sequelize.STRING,
         },
        FEN_0106: {
          type: Sequelize.STRING,
         },
        CHI_0101: {
          type: Sequelize.STRING,
         },
        CHI_0102: {
          type: Sequelize.STRING,
         },
        PRP_0101: {
          type: Sequelize.STRING,
         },
        ID_LOC: { 
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'localidades',
              schema: 'loc',
            },
            key: 'ID_LOC'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'des_local_2020',
      schema: 'ivp',
    });
  }
};
