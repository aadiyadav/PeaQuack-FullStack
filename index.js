// const lib = require("./lib.js")
// const fs = require('fs')

// fs.readFile('yo.txt', (err, file) => {
//     if (err) console.log(err)
//     else console.log(file)
// })

// console.log(lib.sum(3, 4), lib.difference(3, 4))

// const http = require('http')

// const name = {hey: 123}

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     console.log("HAAN BHAI HOGAYA!")
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify(name))
// })

// server.listen("3000")


// import
// EXPRESS
require('dotenv').config()
const express = require('express')
const server = express()
const mongoose = require('mongoose')
const productRouter = require('./routes/product')
const cors = require('cors')
const path = require('path')


// mongoose

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected")
}



// body parser / middleware
server.use(cors())
server.use(express.json())
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
server.use("/api/products", productRouter.router)
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


// user authorization
// const auth = (req, res, next) => {
//     console.log(req.query)
//     if(req.body.password){
//         next()
//     } else{
//         res.sendStatus(401)
//     }
// }



// Endpoint-APIs
// READ get All products
// READ get single product
// Add POST product from raw data
//Update PUT Update information of a particular product but disturbs other properties
//Update PATCH Update information without disturbing other properties
// delete DELETE 



server.listen(process.env.PORT, () => {
    console.log("server started")
})

// XWS7Ce497xv6yylT