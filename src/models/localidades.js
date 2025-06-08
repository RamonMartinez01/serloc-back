'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

class Localidades extends Model {
    static associate(models) {

        // aquí se definirán las asociasiones

        Localidades.belongsTo(models.Municipios, {
            foreignKey: 'ID_MUN',
            targetKey: 'ID_MUN',
          });
    }
}

Localidades.init(
    {
        CVE_LOC: {
            type: DataTypes.STRING(80),
        },
        NOM_LOC: {
            type: DataTypes.STRING(80),
        },
        ALTITUD: {
            type: DataTypes.STRING(80),
        },
        POBTOT: {
            type: DataTypes.INTEGER,
        },
        ID_MUN: {
            type: DataTypes.INTEGER,
        },
        ID_LOC: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        CGLOC: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Localidades',
        tableName: 'localidades',
        schema: 'loc',
        timestamps: false,

    }
)