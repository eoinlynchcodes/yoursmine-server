
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
        table.integer('userID').references('id').inTable('users').notNullable();
        table.string('gender').notNullable();
        table.decimal('price').notNullable();
        table.string('brand').notNullable();
        table.string('condition').notNullable();
        table.string('itemType').notNullable();
        table.varchar('size').notNullable();
        table.string('description').notNullable();
        table.string('image').notNullable();
    })

    .createTable('orders', table => {
      table.increments('id');
      table.integer('clothesItemID').references('itemid').inTable('clothesOnSale').notNullable();
      table.string('buyerFullName').notNullable();
      table.string('buyerAddress').notNullable();
      table.string('buyerCity').notNullable();
      table.string('buyerCountyOrState').notNullable();
      table.string('buyerPostCodeOrZip').notNullable();
      table.string('buyerCountry').notNullable();
      table.string('buyerEmail').notNullable();
      table.varchar('buyerPhone').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('clothesOnSale')
    .dropTableIfExists('orders')
  };
  
  