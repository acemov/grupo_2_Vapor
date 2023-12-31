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
        let idAbuscar = req.params.idQuePiden
        let archivoJuegos = fs.readFileSync('./data/products.json', { encoding: 'utf-8' })
        let juego;
        let juegoEncontrado;

        if (archivoJuegos == '') {
            juego = idAbuscar;
            res.render('products/productNoExiste.ejs', { datos: juego });
        } else {
            juego = JSON.parse(archivoJuegos);
            for (let i = 0; i < juego.length; i++) {
                if (juego[i].id == idAbuscar) {
                    juegoEncontrado = juego[i];
                    res.render('products/productDetailParaJson', { datos: juegoEncontrado });
                    return; // Importante: sal del bucle una vez que encuentres el producto
                }
            }
            // Si llegas aquí, significa que no se encontró el producto
            juego = idAbuscar;
            res.render('products/productNoExiste.ejs', { datos: juego });
        }
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
    edit: function (req, res) {
        let idAbuscar = req.params.idAeditar
        res.render('products/productEdit.ejs',{id : idAbuscar})
    },
    update: function(req, res) {
        const nombresDeImagenes = req.files.map(file => file.filename);
        // Busca el producto por ID y actualiza sus propiedades
        for (let i = 0; i < productsData.length; i++) {
            if (productsData[i].id === req.body.id) {
                productsData[i].nombre = req.body.nombre;
                productsData[i].id = req.body.id;
                productsData[i].precio = req.body.precio;
                productsData[i].imagenes = nombresDeImagenes;
                productsData[i].descripcionN1 = req.body.descripcionN1;
                productsData[i].descripcionN2 = req.body.descripcionN2;
                break; // Importante: salir del bucle una vez que se haya actualizado el producto
            }
        }
    
        // Guarda los cambios en el archivo JSON
        const productosJSON = JSON.stringify(productsData);
        fs.writeFileSync(productsFilePath, productosJSON);
    
        // Redirige al usuario a la lista de productos una vez que se ha editado el producto
        res.render('products/productLista.ejs', { products: productsData });
    },
    delete: function (req,res) {
        let idObjetoAEliminar = req.params.userID

        let archivoJuegos = fs.readFileSync('./data/products.json', { encoding: 'utf-8' })
        let juego = JSON.parse(archivoJuegos)
        
        const arraySinObjeto = juego.filter(function (id) {
            return id.id !== idObjetoAEliminar
        });

        juegosJSON = JSON.stringify(arraySinObjeto)
        fs.writeFileSync('./data/products.json', juegosJSON)
        
        res.render('products/productLista.ejs', { products: productsData });
    }
    
}

module.exports = controller
