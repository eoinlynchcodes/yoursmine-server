const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('../authentication/cationRoutes');
const clothesRoutes = require('../clothes/clothesRoutes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRoutes);
server.use('/api/clothes', clothesRoutes)

server.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

module.exports = server;