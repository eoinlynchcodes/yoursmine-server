const db = require('../dbConfig');

module.exports = {
    addOrder
}

async function addOrder(orderData){
    await db('orders')
    .insert(orderData, 'id')
    return db('orders');
}