require('dotenv').config()
require('./model')
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())
require('./router')(app)

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open')
    })
    .on('error', (err) => {
        console.log(`Connection error ${err.message}`)
    })

const server = app.listen(8000, ()=>{
    const host = server.address().address
    const port = server.address().port
    console.log('APP LISTENING AT HTTP://%s:%s', host, port)
})