const express = require('express')
const path = require('path')
const router = express.Router()
const product = require('../controllers/productController')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/register.html'))
})

router.post('/', product.newProduct)

router.delete('/:id', product.deleteProduct)

module.exports = router