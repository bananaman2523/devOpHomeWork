const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); 
const port = 3000;

app.use(cors()); 

app.use(bodyParser.json()); 

app.post('/submit-numbers', (req, res) => {
    const { num1, num2 } = req.body;
    const convetNum1 = parseInt(num1);
    const convetNum2 = parseInt(num2);
    const sum = convetNum1 + convetNum2;
    res.json({ message: `Data received ${sum}` });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
