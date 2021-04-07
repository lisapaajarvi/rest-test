const express = require('express');
const port = 3000;
const app = express();
let visitors = 0;

app.use(express.json());

app.get('/',(req, res, next) => {
    visitors +=1;
    console.log(visitors);
    next()
})

app.use(express.static('public'))

app.get('/visitors', (req, res) => {
    res.json(visitors)
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))