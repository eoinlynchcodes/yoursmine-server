const db = require('../dbConfig');

module.exports = {
    addClothes
}

async function addClothes(clothesItem){
    await db('clothesOnSale')
    .insert(clothesItem, 'id')
    return db('clothesOnSale');
}