// - - - CONFIGURACIONES - - - //

const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))
app.use('view engine', 'ejs')

const rutaCarrito = require('./routes/carrito')

// - - - SERVIDOR - - - //

app.listen(3000, () => {
    console.log('todo bien')
})

// - - - RUTAS - - - //

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.use('/carrito', rutaCarrito)