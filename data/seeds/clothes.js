exports.seed = function(knex) {
    return knex('clothesOnSale').del()
      .then(function () {
        return knex('clothesOnSale').insert([
        { 
          gender: 'M',
          price: '40',
          brand: 'casteli',
          condition: 'Worn but like new.',
          itemType: 'Rain Jacket',
          description: 'The best jacket I\'ve ever owned. Selling because I have two,',
          image: 'yes.jpg'
        }
        ]);
      });    
  };