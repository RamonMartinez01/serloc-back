'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Tema extends Model {
        static associate(models) {
            // Asociaciones aquí

        }
    }

    Tema.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        cve_tem: {
            type: DataTypes.INTEGER,
        },
        tema: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Tema',
        schema: 'catalogo',
        tableName: 'tema',
        timestamps: false,
    });

    return Tema;
}