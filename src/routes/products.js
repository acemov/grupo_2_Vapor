const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')

/* Metodo GET, se encarga de mostrar las vistas */

router.get('/', productsController.index)
router.get('/create', productsController.create)
router.get('/:id', productsController.detail)
router.get('/:id/edit', productsController.edit)

/* Metodo POST, se encarga de enviar la información de los formularios y ejecutar la logica */

router.post('/create', productsController.store)
router.post('/:id/edit', productsController.save)

module.exports = router