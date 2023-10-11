const productsData = require('../data/products.json');
const controller = {
    mostrandoListaDeProductos: function (req, res) {
        


        res.render('products/productLista.ejs')
    },
    create: function (req, res) {
        res.render('products/productCreate')
    },
    detail: function (req, res) {
        res.render('products/productDetail')
    },
    edit: function (req, res) {
        /* Tito, no toy seguro pero me parece que esto va en el metodo save, excepto el res.render*/
        let datos = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            email: req.body.email
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
        res.render('products/productEdit')
    },
    store: function (req, res) {
        res.redirect('/products/productLista.ejs')
    },
    save: function (req, res) {

    },
}

module.exports = controller