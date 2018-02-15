const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.post('/test/cache-control', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send({
        message: 'response!'
    });
});
app.post('/test', (req, res) => {
    res.send({
        message: 'response!'
    });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))
