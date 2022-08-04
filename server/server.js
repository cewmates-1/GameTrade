const express = require('express');
const app = express();

const PORT = '5000';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.status(200).send('Response is 200');
    res.send('Hello World!');
});
