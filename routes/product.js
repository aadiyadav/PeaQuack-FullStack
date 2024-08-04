const express = require('express')
const productsController = require('../controller/product')
const router = express.Router()

router.get('/', productsController.getAll)
.get('/:id', productsController.getOne)
.post('/', productsController.append)
.put('/:id', productsController.change)
.patch('/:id', productsController.update)
.delete('/:id', productsController.remove);

exports.router = router