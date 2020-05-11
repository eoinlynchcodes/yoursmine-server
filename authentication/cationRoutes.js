const router = require('express').Router();
const bcryptjs = require('bcryptjs');

const cationHelpers = require('./cationHelpers');

router.get('/test', (req, res) => {
    res.status(200).json({ message: 'In cationRouter. Keep working.'})
})

router.get('/allusers', (req, res) => {
    cationHelpers.findAll()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error);
    })
})

router.post('/register', (req, res) => {
    let { firstName, lastName, username, emailAddress, password, dateOfBirth } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 6);
    cationHelpers.add({
        firstName, 
        lastName,       
        username,
        emailAddress,
        password: hashedPassword,
        dateOfBirth
        })
    .then(newUser => {
        res.status(201).json(newUser);
    })
    .catch(error => {
        res.status(500).json('There is an error' + error);
    });
});

module.exports = router;