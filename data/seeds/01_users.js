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