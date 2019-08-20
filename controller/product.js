const Product = require('../models/products')

function getProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Request error: ${err}` })
        if (!product) return res.status(404).send({ message: 'product not found' })
        res.status(200).send({ product }) // normalmente se pondría product: product, sin embargo en ecmascript6 si la clave == valor se puede dejar solo la clave
    })
}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Request error: ${err}` })
        if (!products) return res.status(404).send({ message: 'Database empty' })
        res.status(200).send({ products })
    })
}

function saveProduct(req, res) {
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send({ message: `Error saving on database: ${err}`})
        res.status(200).send({ product: productStored })
    })
}

function updateProduct (req, res) {
    let productId = req.params.productId
    let update = req.body
    
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message: `Error updating the product: ${err}`})
        res.status(200).send({message: 'The product has been updated'})
    })
}

function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err) => {
        if (err) res.status(500).send({message: `Error deleting the product: ${err}`})

        product.remove(err => {
            if (err) res.status(500).send({message: `Error deleting the product: ${err}`})
            res.status(200).send({message: 'The product has been deleted'})
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}