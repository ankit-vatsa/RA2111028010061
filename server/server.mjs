import express from 'express';
import fetch from 'node-fetch';
import fs from 'fs';

const app = express();
app.use(express.json());

const API_URL = 'http://20.244.56.144/test/companies/';

app.post('/api/getDetails', async (req, res) => {
    const { category, numProducts, minPrice, maxPrice } = req.body;

    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
    for (const company of companies) {
        const url = `${API_URL}${company}/categories/${category}/products?top=${numProducts}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3Nzg4LCJpYXQiOjE3MTIxNTc0ODgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI2NTczZTJiLWU1MjAtNGM5Mi1hMTcwLWQ0MDlmMGQ5ZmI5MyIsInN1YiI6ImFzNjU1M0Bzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUS1RSIiwiY2xpZW50SUQiOiIyNjU3M2UyYi1lNTIwLTRjOTItYTE3MC1kNDA5ZjBkOWZiOTMiLCJjbGllbnRTZWNyZXQiOiJabFBNbG9XVHFLUFdZeHZKIiwib3duZXJOYW1lIjoiQW5raXQgVmF0c2EiLCJvd25lckVtYWlsIjoiYXM2NTUzQHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMjgwMTAwNjEifQ.OKpKf_dBG0psk4QL-nt4lX_QeSol0KYeZJRhcRQuZfY',
                'Host': '20.244.56.144',
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        fs.writeFileSync(`${company}.json`, JSON.stringify(data));
    }

    res.sendStatus(200);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
