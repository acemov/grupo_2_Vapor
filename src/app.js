// - - - CONFIGURACIONES - - - //

const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// - - - IMPORTANDO RUTAS - - - //

const rutaCart = require('./routes/cart')
const rutaIndex = require('./routes/index')
const rutaLogin = require('./routes/login')
const rutaDetail = require('./routes/productdetail')
const rutaRegister = require('./routes/register')
const rutaProductCreate = require('./routes/productCreate')
const rutaProductEdit = require('./routes/productEdit')

// - - - SERVIDOR - - - //

app.listen(3000, () => {
    console.log('todo bien')
})

// - - - RUTAS - - - //

app.use('/', rutaIndex)
app.use('/login', rutaLogin)
app.use('/cart', rutaCart)
app.use('/detail', rutaDetail)
app.use('/register', rutaRegister)
app.use('/create', rutaProductCreate)
app.use('/edit', rutaProductEdit)