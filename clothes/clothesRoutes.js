const router = require('express').Router();

const clothesHelpers = require('./clothesHelpers');

router.get('/test', (req, res) => {
    res.send('<h1>Test Passed in clothes routes component.</h1>')
});

router.post('/addClothes', (req, res) => {
    let { userID, gender, brand, condition, itemType, size, description, image } = req.body;
    clothesHelpers.addClothes({
        userID,
        gender,
        brand,
        condition,
        itemType,
        size,
        description,
        image,
    })
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.get('/allClothes', (req ,res) => {
    clothesHelpers.getAllClothes()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = router;