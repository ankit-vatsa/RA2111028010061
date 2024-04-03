// const express = require('express')
// const app = express()

// app.get("/api",(req,res)=>{
//     res.json({"users":["userOne", "userTwo","userThree"]})
// })

// app.listen(5000, () => {console.log("Server started on port 5000")})

// server.js
const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/api', async (req, res) => {
  const { category, numProducts, minPrice, maxPrice } = req.body;

  const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
  for (const company of companies) {
    const url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${numProducts}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const response = await fetch(url);
    const data = await response.json();
    fs.writeFileSync(`${company}.json`, JSON.stringify(data));
  }

  res.sendStatus(200);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
