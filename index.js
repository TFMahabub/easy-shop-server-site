const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleWare-
app.use(cors())
app.use(express.json())



const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function Products(){
  const productsCollection = client.db('easy-shop').collection('products')
  try{
    app.get('/products', async(req, res)=>{
      const productCategories = req.query.product_category;
      const query = {porductCategory: productCategories};
      const cursor = productsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })
  }
  catch{

  }
  finally{

  }
}
Products()
.catch(err=>console.log(err, "products"))




































app.get('/', (req, res)=>{
  res.send('easy shop server is running...')
})

app.listen(port)