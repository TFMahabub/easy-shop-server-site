const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

//middleWare-
app.use(cors())
app.use(express.json())

app.get('/products/glocery', (req, res)=>{
  
})

app.get('/', (req, res)=>{
  res.send('easy shop server is running...')
})

app.listen(port)