const db = require('../dbConfig');

module.exports = {
    add,
    findAllUsers,
    findBy
}

async function add(user){
    await db('users')
    .insert(user, 'id')
    return db('users');
}

function findAllUsers(){
    return db('users')
}

function findBy(filter){
    return db('users').where(filter)
}