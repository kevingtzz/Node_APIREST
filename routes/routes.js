const express = require('express')
const ProductControllers = require('../controller/product')
const api = express.Router()

api.get('/product', ProductControllers.getProducts)
api.get('/product/:productId', ProductControllers.getProduct)
api.post('/product', ProductControllers.saveProduct)
api.put('/product/:productID', ProductControllers.updateProduct)
api.delete('/product/:productID', ProductControllers.deleteProduct)

module.exports = api