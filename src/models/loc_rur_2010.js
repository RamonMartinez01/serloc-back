'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Loc_rur_2010 extends Model {
        static associate(models) {
            // Asociaciones

            //Asociación con Localidades
            Loc_rur_2010.belongsTo(models.Localidades, {
                foreignKey: 'ID_LOC',
                targetKey: 'ID_LOC'
            });
        }
    }

    Loc_rur_2010.init({
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        CGLOC: {
            type: DataTypes.STRING,
        },
        VUL_0201: {
            type: DataTypes.DOUBLE,
        },
        VUL_0202: {
            type: DataTypes.STRING,
        },
        FCB_0201: {
            type: DataTypes.DOUBLE,
        },
        FCB_0202: {
            type: DataTypes.STRING,
        },
        FCB_0203: {
            type: DataTypes.DOUBLE,
        },
        FCB_0204: {
            type: DataTypes.DOUBLE,
        },
        FCB_0205: {
            type: DataTypes.DOUBLE,
        },
        FCB_0206: {
            type: DataTypes.DOUBLE,
        },
        FCB_0207: {
            type: DataTypes.DOUBLE,
        },
        FPI_0201: {
            type: DataTypes.DOUBLE,
        },
        FPI_0202: {
            type: DataTypes.STRING,
        },
        FPI_0203: {
            type: DataTypes.DOUBLE,
        },
        FPI_0204: {
            type: DataTypes.DOUBLE,
        },
        FPI_0205: {
            type: DataTypes.DOUBLE,
        },
        FRE_0201: {
            type: DataTypes.DOUBLE,
        },
        FRE_0202: {
            type: DataTypes.STRING,
        },
        FRE_0203: {
            type: DataTypes.DOUBLE,
        },
        FRE_0204: {
            type: DataTypes.DOUBLE,
        },
        FRE_0205: {
            type: DataTypes.DOUBLE,
        },
        FRE_0206: {
            type: DataTypes.DOUBLE,
        },
        FPT_0201: {
            type: DataTypes.DOUBLE,
        },
        FPT_0202: {
            type: DataTypes.STRING,
        },
        FPT_0203: {
            type: DataTypes.DOUBLE,
        },
        FPT_0204: {
            type: DataTypes.DOUBLE,
        },
        FPT_0205: {
            type: DataTypes.DOUBLE,
        },
        FPT_0206: {
            type: DataTypes.DOUBLE,
        },
        FPP_0201: {
            type: DataTypes.DOUBLE,
        },
        FPP_0202: {
            type: DataTypes.STRING,
        },
        FPP_0203: {
            type: DataTypes.DOUBLE,
        },
        FPP_0204: {
            type: DataTypes.DOUBLE,
        },
        FPP_0205: {
            type: DataTypes.DOUBLE,
        },
        FAN_0201: {
            type: DataTypes.DOUBLE,
        },
        FAN_0202: {
            type: DataTypes.STRING,
        },
        FAN_0203: {
            type: DataTypes.DOUBLE,
        },
        FAN_0204: {
            type: DataTypes.DOUBLE,
        },
        FAD_0201: {
            type: DataTypes.DOUBLE,
        },
        FAD_0202: {
            type: DataTypes.STRING,
        },
        FAD_0203: {
            type: DataTypes.DOUBLE,
        },
        FAD_0204: {
            type: DataTypes.DOUBLE,
        },
        FPE_0201: {
            type: DataTypes.DOUBLE,
        },
        FPE_0202: {
            type: DataTypes.STRING,
        },
        FPE_0203: {
            type: DataTypes.DOUBLE,
        },
        FPE_0204: {
            type: DataTypes.DOUBLE,
        },
        POBTOT: {
            type: DataTypes.INTEGER,
        },
        ID_LOC: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Loc_rur_2010',
        schema: 'ivp',
        tableName: 'loc_rur_2010',
        timestamps: false,
    });

    return Loc_rur_2010;
};