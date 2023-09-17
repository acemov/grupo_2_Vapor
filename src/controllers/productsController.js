const controller = {
    index: function (req, res) {
        res.render('/products/products')
    },
    create: function (req, res) {
        res.render('products/productCreate')
    },
    detail: function (req, res) {
        res.render('products/productDetail')
    },
    edit: function (req, res) {
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
}

module.exports = controller