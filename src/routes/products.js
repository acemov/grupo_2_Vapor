const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')

router.get('/', productsController.index)
router.get('/create', productsController.create)
router.get('/:id', productsController.detail)
router.get('/:id/edit', productsController.edit)

router.post('/', productsController.create)

module.exports = router