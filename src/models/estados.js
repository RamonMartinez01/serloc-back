'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Estados extends Model {
    static associate(models) {
      // Asociaciones se definen aquí 

      // models.Estados.hasMany(models.Municipios, { foreignKey: 'ID_ENT' });
      Estados.hasMany(models.Municipios, {
        foreignKey: 'ID_ENT',
        sourceKey: 'ID_ENT'
      });
    }
  }

  Estados.init({
        ID_ENT: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        CVEGEO: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        CVE_ENT: {
            type: DataTypes.STRING(2),
            allowNull: true,
        },
        NOMGEO: {
            type: DataTypes.STRING(80),
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Estados',
        schema: 'edo_mun',
        tableName: 'estados',
        timestamps: false,
    });

    return Estados;
};

