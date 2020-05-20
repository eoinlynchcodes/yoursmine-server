const db = require('../dbConfig');

module.exports = {
    addOrder,
    getAllOrders
}

async function addOrder(orderData){
    await db('orders')
    .insert(orderData, 'id')
    return db('orders');
};

function getAllOrders(){
    return db('orders');
};