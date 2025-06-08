'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class na extends Model {
        static associate(models) {
            // Asociaciones 

             //Asociación con Municipios
             Na.belongsTo(models.Municipios, {
                foreignKey: 'ID_MUN',
                targetKey: 'ID_MUN'
            });
        }
    }

    na.init({
        ID_NA: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        CVE_NUCLEO: {
            type: DataTypes.STRING,
        },
        NOM_NUCLEO: {
            type: DataTypes.STRING,
        },
        CLV_UNIC_1: {
            type: DataTypes.STRING,
        },
        FOL_MATRIZ: {
            type: DataTypes.STRING,
        },
        TIPO: {
            type: DataTypes.STRING,
        },
        PROGRAMA: {
            type: DataTypes.STRING,
        },
        REP: {
            type: DataTypes.DOUBLE,
        },
        AEA_TOT: {
            type: DataTypes.DOUBLE,
        },
        ID_MUN: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Na',
        schema: 'public',
        tableName: 'na',
        timestamps: true,
    });

    return na;
}