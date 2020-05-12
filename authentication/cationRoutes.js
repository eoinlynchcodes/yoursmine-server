const router = require('express').Router();
const bcryptjs = require('bcryptjs');

const cationHelpers = require('./cationHelpers');

router.get('/test', (req, res) => {
    res.send("<h1>Test Passed</h1>")
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

router.post('/login', (req, res) => {
    let { emailAddress, password } = req.body;

    cationHelpers.findBy({ emailAddress })
    .first()
    .then( user => {
        if(user && bcryptjs.compareSync(password, user.password)){
            res.status(200).json({
                message: `Welcome ${user.username}! Next Eoin will add a token...`,
                userID: user.id
            })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;