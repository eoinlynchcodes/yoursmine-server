// require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/yours-mine.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds',
    }
  },

  testing: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },
};
