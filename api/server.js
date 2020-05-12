const express = require("express");
const dotenv = require('dotenv');

dotenv.config();

const cors = require('cors');
const helmet = require('helmet');

// const authRoutes = require('./authentication/cationRoutes');

const server = express();

// const PORT = process.env.PORT || 3333;

server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use('/auth', authRoutes);

server.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

// server.get("/data", (req, res) => {
//     res.status(200).json()
// })

// server.listen(process.env.PORT || PORT, () => {
//     console.log(`Server is running on port ${PORT}...`)
// });

module.exports = server;