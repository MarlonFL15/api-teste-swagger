const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})