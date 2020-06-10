const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const { CLIENT_ORIGIN } = require('./config')

const server = express();

cloudinary.congif({
    // api keys go here:
    // https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
})

const authRoutes = require('../authentication/cationRoutes');
const clothesRoutes = require('../clothes/clothesRoutes');
const orderRoutes = require('../orders/orderRoutes');

server.use(formData.parse());
server.use(express.json());
server.use(helmet());
// Tutorial says to use orign: CLIENT_ORIGIN
server.use(cors({
    origin: CLIENT_ORIGIN
}));

server.use('/api/auth', authRoutes);
server.use('/api/clothes', clothesRoutes)
server.use('/api/orders', orderRoutes)

server.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});
server.post('/image-upload', (req, res) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise 
    .all(promises)
    .then(results => res.json(results))
})

module.exports = server;