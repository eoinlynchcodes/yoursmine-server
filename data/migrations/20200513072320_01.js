
exports.up = function(knex) {
    return knex.schema
    .createTable('users', table => {
        table.increments('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('username').unique().notNullable();
        table.string('emailAddress', 128).unique().notNullable();
        table.string('password').notNullable();
        table.date('dateOfBirth').notNullable();
    })
  
    .createTable('clothesOnSale', table => {
        table.increments('id');
        table.string('userID').references('id').inTable('users').notNullable();
        table.string('gender').notNullable();
        table.string('brand').notNullable();
        table.string('condition').notNullable();
        table.string('itemType').notNullable();
        table.varchar('size').notNullable();
        table.string('description').notNullable();
        table.string('image').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('clothesOnSale')
  };
  
  