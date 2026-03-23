async function getDados() {
    try {
        const response = await fetch('/dados')
        const products = await response.json()

        products.forEach(product => {
            console.log(product)

            const lista = document.getElementById('productList')

            const productContainer = document.createElement('div')
            productContainer.classList.add('product')

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

            productContainer.appendChild(informationsContainer)

            lista.appendChild(productContainer)
        })
    } catch(error) {
        console.log('Erro: ', error)
    }
}

window.onload = getDados