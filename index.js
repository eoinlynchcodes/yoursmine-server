require('dotenv').config();

const server = require('./api/server');

// HERE THE PORT NEEDS TO BE MADE DYNAMIC. THIS IS FOR DEVELOPMENT. 8 June, by Eoin.
// process.env.PORT || 
const PORT = 3333;

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})