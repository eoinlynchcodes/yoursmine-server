exports.seed = function(knex) {
  return knex('clothesOnSale').del()
    .then(function () {
      return knex('clothesOnSale').insert([
      { 
        userID: 1,
        gender: 'M',
        price: 40,
        brand: 'Castelli',
        condition: 'Worn but like new.',
        itemType: 'Rain Jacket',
        size: 'L',
        description: 'The best jacket I\'ve ever owned. Selling because I have two,',
        image: 'yes.jpg'
      }
      ]);
    });    
};