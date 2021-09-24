const express = require('express');
const path = require('path')
const morgan  = require('morgan')
const app = express();

//initializing database
const databse = require('./database')

//server config
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())


//getting routes
const pillRoutes  = require('./routes/pillsRoutes')

//using routes
app.use('/',pillRoutes)

//middleware 
app.use(morgan('dev'))







let port =3000
app.listen(port)
console.log(`listening on port ${port}`)

