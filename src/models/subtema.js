'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Subtema extends Model {
        static associate(models) {
            // Asociaciones 

        }
    }

    Subtema.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        cve_tem: {
            type: DataTypes.INTEGER,
        },
        cve_sub: {
            type: DataTypes.STRING,
        },
        anio: {
            type: DataTypes.INTEGER,
        },
        subtema: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Subtema',
        schema: 'catalogo',
        tableName: 'subtema',
        timestamps: false,
    });

    return Subtema;
}