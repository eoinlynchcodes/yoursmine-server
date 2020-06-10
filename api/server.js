const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRoutes = require('../authentication/cationRoutes');
const clothesRoutes = require('../clothes/clothesRoutes');
const orderRoutes = require('../orders/orderRoutes');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRoutes);
server.use('/api/clothes', clothesRoutes)
server.use('/api/orders', orderRoutes)

server.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

module.exports = server;