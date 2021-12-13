const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/', routes)
app.use(cors())
app.get('/termos', (req, res) => res.send('Termos'))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})