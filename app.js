require('dotenv').config()
const db = require('./src/config/firebaseConfig')
const express = require('express')
const path = require('path')
const productRoutes = require('./src/routes/productRoutes')

const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/dados', async (req, res) => {
    const productRef = await db.collection('products').get()
    const lista = productRef.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    res.json(lista)
})

app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.collection('products').doc(id).delete()
    } catch(error) {
        console.log('Erro: ', error)
    }
})

app.use('/products', productRoutes)

app.use(express.json())

//INICIA O SERVIDOR
app.listen(port, () => {
    console.log('SERVIDOR RODANDO')
})