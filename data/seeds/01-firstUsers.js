
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Eoin', 
          lastName: 'Lynch',
          username: 'eoinlynchtest',
          emailAddress: 'elelynch@gmail.com',
          password: 'eointestpass',
          dateOfBirth: '1995-09-14'
        }
      ]);
    });
};
