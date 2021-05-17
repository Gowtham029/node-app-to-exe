const express = require('express')
const app = express()
const port = 3000

const fs = require("fs");

const fileContents = fs.readFileSync("./files/file.txt");
console.log(fileContents.toString());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})