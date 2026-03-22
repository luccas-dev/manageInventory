const db = require('../config/firebaseConfig')

exports.newProduct = async (req, res) => {
    try {
        const {productName} = req.body
    
        const productRef = await db.collection('products').add({
            nome: productName,
            marca: 'TECFIL',
            quantidade: 10,
            EAN: 1234957382892
        })
        console.log('Produto salvo com sucesso')
        res.redirect('/products')
    } catch (error) {
        console.error('ERRO AO SALVAR', error)
        res.status(500).send('Erro ao salvar no banco de dados')
    }
}