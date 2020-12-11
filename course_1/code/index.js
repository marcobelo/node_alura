const express = require('express')

const app = express()

app.listen(3000, () => console.log('servidor rodando na 3000'))

app.get('/', (request, response) => response.send('Servidor rodando, ok!'))