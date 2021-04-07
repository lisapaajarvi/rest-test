const express = require('express');
const port = 3000;
const app = express();
let visitors = 1;

app.use(express.json());
app.use(express.static('public'))

app.get('/visitors', (req, res) => {
    res.json(visitors)
})

app.post('/visitors', (req, res) => {
    visitors ++;
    res.json(visitors)
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))