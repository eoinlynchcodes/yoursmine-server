const knex = require('knex');

const knexfile = require('./knexfile');

const dbEnv = process.env.DB_ENV || 'development';

// const configOptions = knexfile[env];

// module.exports = knex(configOptions);

module.exports = knex(knexfile[dbEnv]);

