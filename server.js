const express = require("express")

const app = express() 
const PORT = process.env.PORT || 8080


// // //


app.get("/productos", (req, res) => {
    const fs = require("fs")
    fs.readFile("products.txt", "utf-8", function(err, data) {
        if(err) throw err;
        obj = JSON.parse(data)
        let resultArray = obj
        res.send(resultArray)
    })
})

app.get("/random", (req, res) => {
    const fs = require("fs")
    fs.readFile("products.txt", "utf-8", function(err, data) {
        if(err) throw err;
        
        const lines = data.split('\n')

        const item = lines[Math.floor(Math.random() * lines.length)]

        res.send(item)
    })
})


// // //

const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})

server.on("error", e => console.log("Error on server"));