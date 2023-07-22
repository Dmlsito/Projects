const express = require('express')

const app = express()

app.listen(3000)

// Express necesita esta informacion para poder recibir texto y json
app.use(express.text())
app.use(express.json())

console.log(`Server on port ${3000}`)

app.get('/', (request, response) => {
  response.json({ name: 'Daniel' })
})

app.post('/user', (request, response) => {
  response.send('Usuario creado con exito')
})

app.get('/query', (request, response) => {
  console.log(request.query)
  response.send('Tamos probando cosas')
})
