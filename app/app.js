const express = require('express')
const app = express()
const connection = require('./config/database')

app.listen(3000, async () => {
    console.log('Servidor rodando na porta 3000')
})