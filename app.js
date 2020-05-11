const express = require("express")
const app = express()

// this line lets you serve static files 
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});


app.get("/data", (req, res) => {
    res.status(200).json({ message: "This is data."})
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...")
});