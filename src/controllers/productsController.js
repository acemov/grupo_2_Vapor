const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

const productsData = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
    mostrandoListaDeProductos: function (req, res) {
        res.render('products/productLista.ejs', { products: productsData });
    },
    create: function (req, res) {
        res.render('products/productCreate')
    },
    detail: function (req, res) {
        res.render('products/productDetail')
    },
    edit: function (req, res) {
        /* Tito, no toy seguro pero me parece que esto va en el metodo save, excepto el res.render*/

        res.render('products/productEdit')
    },
    store: function (req, res) {
        const nombresDeImagenes = req.files.map(file => file.filename);
        let datos = {
            nombre: req.body.nombre,
            id: req.body.id,
            precio: req.body.precio,
            imagenes: nombresDeImagenes,
            descripcionN1: req.body.descripcionN1,
            descripcionN2: req.body.descripcionN2,
        }

        let archivoJuegos = fs.readFileSync('./data/products.json', { encoding: 'utf-8' })
        let juego;
        if (archivoJuegos == '') {
            juego = []
        } else {
            juego = JSON.parse(archivoJuegos)
        }
        juego.push(datos)

        juegosJSON = JSON.stringify(juego)
        fs.writeFileSync('./data/products.json', juegosJSON)

        res.render('products/productLista.ejs', { products: productsData });
    },
    save: function (req, res) {

    },
}

module.exports = controller
