const express = require('express')
const router = express.Router()
const {body} = require('express-validator')

const productsController = require('../controllers/productsController')

/* Validando formulario de creación */

const validateCreateform = [
    body('name').notEmpty().withMessage('Campo Obligatorio'),
    body('id').notEmpty().withMessage('Campo Obligatorio'),
]

/* Metodo GET, se encarga de mostrar las vistas */

router.get('/listaDeProductos', productsController.mostrandoListaDeProductos)
router.get('/create', productsController.create)
router.get('/:id', productsController.detail)
router.get('/:id/edit', productsController.edit)

/* Metodo POST, se encarga de enviar la información de los formularios y ejecutar la logica */

router.post('/create', validateCreateform ,productsController.store)
router.post('/:id/edit', productsController.save)

module.exports = router