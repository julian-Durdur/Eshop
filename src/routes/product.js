import express from 'express'
import {Product} from '../models/product'
const productRouter = express.Router()

productRouter.post('/add', (req, res) => {
    const newProduct = new Product(req.body)
    newProduct.save((err, saveProduct) => {
        if (err) res.send(err)
        res.json(saveProduct)
    })
})
productRouter.get('/', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) res.send(err)
        res.json(products)
    })                               //c'est ici que sa se passe

})

productRouter.get('/coucou', (req, res) => {
    res.send("Salut à tous")
})



export { productRouter }
