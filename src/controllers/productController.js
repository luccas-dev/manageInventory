const db = require('../config/firebaseConfig')

exports.newProduct = async (req, res) => {
    try {
        const {productName, markProduct, eanProduct, quantityStock} = req.body
    
        const productRef = await db.collection('products').add({
            nome: productName,
            marca: markProduct,
            quantidade: quantityStock,
            EAN: eanProduct,
            createDate: new Date().toLocaleDateString('pt-br', {day: '2-digit', month: '2-digit', year: 'numeric'})
        })
        console.log('Produto salvo com sucesso')
        res.redirect('/products')
    } catch (error) {
        console.error('ERRO AO SALVAR', error)
        res.status(500).send('Erro ao salvar no banco de dados')
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const id = req.params.id
        await db.collection('products').doc(id).delete()
    } catch(error) {
        console.log('ERRO: ', error)
        res.status(500).send('Erro ao deletar o produto')
    }
}