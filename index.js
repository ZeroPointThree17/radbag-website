const express = require('express')
const path = require('path')
const app = express()
const port = 3000

var public = path.join(__dirname, '.');

app.use(express.static(public));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})

app.get('/radbag-wallet-privacy-policy', (req, res) => {
  res.sendFile('radbag-wallet-privacy-policy.html', {root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})