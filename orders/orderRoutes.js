const router = require('express').Router();

// const OrderHelpers = require('./orderHelpers');

router.get('/test', ( req, res) => {
    res.send('<h1>In order Routes</h1>')
})



module.exports = router;