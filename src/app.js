const express = require('express')
const app = express()

const path = require('path')

const methodOverride = require('method-override')

const session = require('express-session')

// - - - CONFIGURACIONES - - - //

app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, '../public')))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// esta linea me daba error asi que la sacque xd app.use (session({secret: 'Secretito'}))

// - - - IMPORTANDO RUTAS - - - //

const rutaCart = require('./routes/cart')
const rutaIndex = require('./routes/index')
const rutaLogin = require('./routes/login')
const rutaRegister = require('./routes/register')
const rutaProducts = require('./routes/products')

// - - - SERVIDOR - - - //

app.listen(3000, () => {
    console.log('todo bien')
})

// - - - RUTAS - - - //

app.use('/', rutaIndex)
app.use('/login', rutaLogin)
app.use('/cart', rutaCart)
app.use('/register', rutaRegister)
app.use('/products', rutaProducts)