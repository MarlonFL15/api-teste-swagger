const express = require('express')
const app = express()
const connection = require('./database/connection')

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})