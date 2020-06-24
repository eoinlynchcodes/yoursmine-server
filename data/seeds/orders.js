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