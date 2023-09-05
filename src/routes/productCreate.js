const express = require('express')
const router = express.Router()
const productCreateController = require('../controllers/productCreateController')

router.get('/', productCreateController.index)

module.exports = router