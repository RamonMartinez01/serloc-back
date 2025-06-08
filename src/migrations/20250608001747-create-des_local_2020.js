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
        CGLOC: DataTypes.STRING,
        PTL_0101: DataTypes.STRING,
        TPU_0102: DataTypes.STRING,
        ABS_0101: DataTypes.STRING,
        ABS_0102: DataTypes.STRING,
        ABS_0106: DataTypes.STRING,
        ABS_0107: DataTypes.STRING,
        ABS_0110: DataTypes.STRING,
        COM_0101: DataTypes.STRING,
        COM_0103: DataTypes.STRING,
        COM_0104: DataTypes.STRING,
        COM_0109: DataTypes.STRING,
        SAS_0101: DataTypes.STRING,
        SAS_0102: DataTypes.STRING,
        SAS_0103: DataTypes.STRING,
        TEL_0101: DataTypes.STRING,
        TEL_0102: DataTypes.STRING,
        TEL_0103: DataTypes.STRING,
        TEL_0106: DataTypes.STRING,
        AEC_0101: DataTypes.STRING,
        AEC_0301: DataTypes.STRING,
        AEC_0302: DataTypes.STRING,
        AEC_0303: DataTypes.STRING,
        AUT_0101: DataTypes.STRING,
        AUT_0102: DataTypes.STRING,
        AUT_0103: DataTypes.STRING,
        AUT_0104: DataTypes.STRING,
        CON_0101: DataTypes.STRING,
        CON_0102: DataTypes.STRING,
        CON_0103: DataTypes.STRING,
        CON_0104: DataTypes.STRING,
        FEN_0101: DataTypes.STRING,
        FEN_0102: DataTypes.STRING,
        FEN_0103: DataTypes.STRING,
        FEN_0104: DataTypes.STRING,
        FEN_0106: DataTypes.STRING,
        CHI_0101: DataTypes.STRING,
        CHI_0102: DataTypes.STRING,
        PRP_0101: DataTypes.STRING,
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
