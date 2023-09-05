const express = require('express')
const router = express.Router()
const productEditController = require('../controllers/productEditController')

router.get('/', productEditController.index)

module.exports = router