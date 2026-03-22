const express = require('express')
const path = require('path')
require('dotenv').config()
const productRoutes = require('./src/routes/productRoutes')

const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/products', productRoutes)

app.use(express.json())

//INICIA O SERVIDOR
app.listen(port, () => {
    console.log('SERVIDOR RODANDO')
})