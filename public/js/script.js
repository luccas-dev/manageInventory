async function getDados() {
    try {
        const response = await fetch('/dados')
        const products = await response.json()

        products.forEach(product => {
            createProduct(product)
        })
    } catch(error) {
        console.log('Erro: ', error)
    }
}

async function deleteProduct(id) {
    try {
        const response = await fetch(`/products/${id}`, {
            method: 'DELETE'
        })
        window.location.reload()
    } catch(error) {
        console.log('ERRO: ', error)
    }
}

function createButton(btnIcon, idName, title, productId) {
    const btn = document.createElement('button')
    btn.id = idName
    btn.title = title
    if(btnIcon == 'delete') {
        btn.onclick = () => deleteProduct(productId)
    }

    const icon = document.createElement('img')
    icon.src = `./assets/images/${btnIcon}_icon.png`

    btn.appendChild(icon)

    return btn
}

function createInformations(product) {
    const informationsContainer = document.createElement('div')
    informationsContainer.classList.add('informations')

    const productName = document.createElement('strong')
    productName.innerHTML = product.nome

    const info = document.createElement('p')
    const quantityInfo = document.createElement('small')
    const eanInfo = document.createElement('small')
    const markInfo = document.createElement('small')

    quantityInfo.innerHTML = `QTD: ${product.quantidade}`
    eanInfo.innerHTML = `EAN: ${product.EAN}`
    markInfo.innerHTML = product.marca

    info.appendChild(quantityInfo)
    info.appendChild(eanInfo)
    info.appendChild(markInfo)

    informationsContainer.appendChild(productName)
    informationsContainer.appendChild(info)

    return informationsContainer
}

function createProduct(product) {
    const buttonsList = []
    const lista = document.getElementById('productList')

    const productContainer = document.createElement('div')
    productContainer.classList.add('product')

    const informationsContainer = createInformations(product)

    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttons')

    buttonsList.push(createButton('edit', 'editProduct', 'Editar Produto', product.id))
    buttonsList.push(createButton('delete', 'deleteProduct', 'Deletar Produto', product.id))
    buttonsList.push(createButton('supply', 'supplyStock', 'Abastecer Estoque', product.id))
    buttonsList.push(createButton('output', 'outputProduct', 'Saida de Produto', product.id))

    buttonsList.forEach(button => {
        buttonContainer.appendChild(button)
    })

    productContainer.appendChild(informationsContainer)
    productContainer.appendChild(buttonContainer)

    lista.appendChild(productContainer)
}

window.onload = getDados