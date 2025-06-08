'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Loc_rur_mpio_2020 extends Model {
        static associate(models) {
            // Asociaciones

            //Asociación con Municipios
            Loc_rur_mpio_2020.belongsTo(models.Municipios, {
                foreignKey: 'ID_MUN',
                targetKey: 'ID_MUN'
            });
        }
    }

    
    Loc_rur_mpio_2020.init({
        ID_MUN_2020: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        CGMUN: {
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
        FRE_0103: {
            type: DataTypes.DOUBLE,
        },
        FRE_0104: {
            type: DataTypes.DOUBLE,
        },
        FRE_0105: {
            type: DataTypes.DOUBLE,
        },
        FRE_0106: {
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
        ID_MUN: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize,
        modelName: 'Loc_rur_mpio_2020',
        schema: 'ivp',
        tableName: 'loc_rur_mpio_2020',
        timestamps: false,
    });

    return Loc_rur_mpio_2020;
}