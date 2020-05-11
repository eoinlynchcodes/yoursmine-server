const express = require("express")
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./authentication/cationRoutes');

const app = express()

// this line lets you serve static files 
app.use(express.static("public"))
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

app.get("/data", (req, res) => {
    res.status(200).json()
})

const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
});