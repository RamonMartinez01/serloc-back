require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    host: 'cont-postgis',
    dialect: 'postgres',
    port: 5432,
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
};
