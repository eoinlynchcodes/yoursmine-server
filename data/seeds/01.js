
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
      { firstName: 'Eoin',
        lastName: 'Lynch',
        username: 'eoin',
        emailAddress: 'eoin95lynch@gmail.com',
        password: 'eoinpass',
        dateOfBirth: '1995-09-14'}
      ]);
    });   
};


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

exports.seed = function(knex) {
  return knex('orders').del()
    .then(function () {
      return knex('orders').insert([
      { 
        clothesItemID: 1,
        buyerFullName: 'Eoin Lynch',
        buyerAddress: 'Togherstown, Loughanavally',
        buyerCity: 'Mullingar',
        buyerCountyOrState: 'Westmeath',
        buyerPostCodeOrZip: 'N91R6D8',
        buyerCountry: 'Ireland',
        buyerEmail: 'eoin95lynch@gmail.com',
        buyerPhone: '+353863207916'
      }
      ]);
    });    
};