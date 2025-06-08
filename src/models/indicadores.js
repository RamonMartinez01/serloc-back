'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Indicadores extends Model {
        static associate(models) {
            // Asociaciones 
        }
    }

    Indicadores.init({
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
        indicadores: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Indicadores',
        schema: 'catalogo',
        tableName: 'indicadores',
        timestamps: false,
    });

    return Indicadores;
}