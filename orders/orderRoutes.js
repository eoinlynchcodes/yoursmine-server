const router = require('express').Router();

const OrderHelpers = require('./orderHelpers');

router.get('/test', ( req, res) => {
    res.send('<h1>In order Routes</h1>');
});

router.post('/new', (req, res) => {
    let { clothesItemID, buyerFullName, buyerAddress, buyerCity, buyerCountyOrState, buyerPostCodeOrZip, buyerCountry, buyerEmail, buyerPhone } = req.body;
    OrderHelpers.addOrder({
        clothesItemID,
        buyerFullName,
        buyerAddress,
        buyerCity,
        buyerCountyOrState,
        buyerPostCodeOrZip,
        buyerCountry,
        buyerEmail,
        buyerPhone
    })
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

router.get('/all', (req, res) => {
    OrderHelpers.getAllOrders()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

module.exports = router;