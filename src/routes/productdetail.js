const express = require('express')
const router = express.Router()
const loginController = require('../controllers/productdetailController')

router.get('/', productdetailController.ejs)

module.exports = router