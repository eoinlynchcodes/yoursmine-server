const db = require('../dbConfig');

module.exports = {
    addClothes,
    getAllClothes
}

async function addClothes(clothesItem){
    await db('clothesOnSale')
    .insert(clothesItem, 'id')
    return db('clothesOnSale');
}

function getAllClothes(){
    return db('clothesOnSale');
}