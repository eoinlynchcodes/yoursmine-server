const router = require('express').Router();

const clothesHelpers = require('./clothesHelpers');

router.get('/test', (req, res) => {
    res.send('<h1>Test Passed in clothes routes component.</h1>')
});

router.post('/addItem', (req, res) => {

    clothesHelpers.addClothes(req.body)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;