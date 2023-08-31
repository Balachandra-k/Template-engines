const express = require('express')
require('dotenv').config()// config settings to access the varible of .env file
 const cors = require('cors')//cross origin resours sharing (to avoid CROS effect)
const PORT = process.env.PORT
const connectDb = require('./CRUD_EJS/db/connect')

const app = express()

//template engine settings
app.set('view engine','ejs')
app.set('views','./view')

//middlewares
app.use(express.urlencoded({extended :true}))
app.use(express.json())

app.use(cors())

//index route

app.use('/',require('./CRUD_EJS/route/user_route'))

//server call   
app.listen(PORT,()=>{
    connectDb()
    console.log(`server is started @http://localhost:${PORT}`)
})