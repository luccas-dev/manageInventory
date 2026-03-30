const express = require('express')
const path = require('path')
const router = express.Router()
const product = require('../controllers/productController')
const db = require('../config/firebaseConfig')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/register.html'))
})

router.post('/', product.newProduct)

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.collection('products').doc(id).delete()
    } catch(error) {
        console.log('ERRO: ', error)
    }
})

module.exports = router