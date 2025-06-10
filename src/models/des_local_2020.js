'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Des_local_2020 extends Model {
        static associate(models) {
            // Asociaciones

            //Asociación con Localidades
            Des_local_2020.belongsTo(models.Localidades, {
                foreignKey: 'ID_LOC',
                targetKey: 'ID_LOC'
            });
        }
    }

    Des_local_2020.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        CGLOC: {
            type: DataTypes.STRING,
        },
        PTL_0101: {
            type: DataTypes.STRING,
        },
        TPU_0102: {
            type: DataTypes.STRING,
        },
        ABS_0101: {
            type: DataTypes.STRING,
        },
        ABS_0102: {
            type: DataTypes.STRING,
        },
        ABS_0106: {
            type: DataTypes.STRING,
        },
        ABS_0107: {
            type: DataTypes.STRING,
        },
        ABS_0110: {
            type: DataTypes.STRING,
        },
        COM_0101: {
            type: DataTypes.STRING,
        },
        COM_0103: {
            type: DataTypes.STRING,
        },
        COM_0104: {
            type: DataTypes.STRING,
        },
        COM_0109: {
            type: DataTypes.STRING,
        },
        SAS_0101: {
            type: DataTypes.STRING,
        },
        SAS_0102: {
            type: DataTypes.STRING,
        },
        SAS_0103: {
            type: DataTypes.STRING,
        },
        TEL_0101: {
            type: DataTypes.STRING,
        },
        TEL_0102: {
            type: DataTypes.STRING,
        },
        TEL_0103: {
            type: DataTypes.STRING,
        },
        TEL_0106: {
            type: DataTypes.STRING,
        },
        AEC_0101: {
            type: DataTypes.STRING,
        },
        AEC_0301: {
            type: DataTypes.STRING,
        },
        AEC_0302: {
            type: DataTypes.STRING,
        },
        AEC_0303: {
            type: DataTypes.STRING,
        },
        AUT_0101: {
            type: DataTypes.STRING,
        },
        AUT_0102: {
            type: DataTypes.STRING,
        },
        AUT_0103: {
            type: DataTypes.STRING,
        },
        AUT_0104: {
            type: DataTypes.STRING,
        },
        CON_0101: {
            type: DataTypes.STRING,
        },
        CON_0102: {
            type: DataTypes.STRING,
        },
        CON_0103: {
            type: DataTypes.STRING,
        },
        CON_0104: {
            type: DataTypes.STRING,
        },
        FEN_0101: {
            type: DataTypes.STRING,
        },
        FEN_0102: {
            type: DataTypes.STRING,
        },
        FEN_0103: {
            type: DataTypes.STRING,
        },
        FEN_0104: {
            type: DataTypes.STRING,
        },
        FEN_0106: {
            type: DataTypes.STRING,
        },
        CHI_0101: {
            type: DataTypes.STRING,
        },
        CHI_0102: {
            type: DataTypes.STRING,
        },
        PRP_0101: {
            type: DataTypes.STRING,
        },
        ID_LOC: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Des_local_2020',
        schema: 'ivp',
        tableName: 'des_local_2020',
        timestamps: false,
    });

    return Des_local_2020;
};