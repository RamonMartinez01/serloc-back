'use strict'

const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Municipios extends Model {
        static associate(models) {
            //Asociación cons estados 
            Municipios.belongsTo(models.Estados, {
                foreignKey: 'ID_ENT',
                targetKey: 'ID_ENT',
            });

            //Asociación cons localidades
            Municipios.hasMany(models.Localidades, {
                foreignKey: 'ID_MUN',
                sourceKey: 'ID_MUN'
              });
            
            //Asociación cons loc_rur_mpio_2010
            Municipios.hasMany(models.Loc_rur_mpio_2010, {
              foreignKey: 'ID_MUN',
              sourceKey: 'ID_MUN'
            });

            //Asociación cons loc_rur_mpio_2020
            Municipios.hasMany(models.Loc_rur_mpio_2020, {
              foreignKey: 'ID_MUN',
              sourceKey: 'ID_MUN'
            });

             //Asociación cons Na
             Municipios.hasMany(models.Na, {
              foreignKey: 'ID_MUN',
              sourceKey: 'ID_MUN'
            });

            // Aquí pueden agregarse más asociaciones 
        }
    }

    Municipios.init({
        ID_MUN: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        CVEGEO: {
          type: DataTypes.STRING(3),
          allowNull: true,
        },
        NOMGEO: {
          type: DataTypes.STRING(80),
          allowNull: true,
        },
        ID_ENT: {
          type: DataTypes.INTEGER,
          allowNull: true, // Se puede ajustar si la integridad referencial lo requiere
        },
      }, {
        sequelize,
        modelName: 'Municipios',
        schema: 'edo_mun',
        tableName: 'municipios',
        timestamps: false,
      });
    
      return Municipios;
}