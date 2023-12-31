const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const multer = require("multer")
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "../public/img/productos")
    },
    filename: function (req, file, cb) {
        cb(null , file.fieldname + "-" + Date.now () + '-' + uuid.v4() + path.extname(file.originalname))
    }
})
var upload = multer ({storage : storage})

const productsController = require('../controllers/productsController')

/* Validando formulario de creación 

const validateCreateform = [
    body('name').notEmpty().withMessage('Campo Obligatorio'),
    body('id').notEmpty().withMessage('Campo Obligatorio'),
]
*/

/* Metodo GET, se encarga de mostrar las vistas */

router.get('/listaDeProductos', productsController.mostrandoListaDeProductos) //http://localhost:3000/products/listaDeProductos
router.get('/create', productsController.create) //http://localhost:3000/products/create
router.get('/id/:idQuePiden', productsController.detail) //http://localhost:3000/products/id/:idQuePiden
router.get('/:idAeditar/edit', productsController.edit) //http://localhost:3000/products/:idAeditar/edit
router.delete('/delete/:userID',productsController.delete) //http://localhost:3000/products/listaDeProductos
/* Metodo POST, se encarga de enviar la información de los formularios y ejecutar la logica 

router.post('/create', validateCreateform ,productsController.store)
*/
router.post('/create',upload.array("imagenesProducts"),productsController.store) //http://localhost:3000/products/create
router.put('/update', upload.array("imagenesProducts") ,productsController.update); //http://localhost:3000/products/update/:id

module.exports = router