const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/components', (req, res) => {
  res.render('LAYOUT')
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const server = app.listen(PORT, () => {
  console.log(`Express is running on port ${server.address().port}`)
  console.log(`http://localhost:${PORT}/`)
})
