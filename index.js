// this is  a simple server
const express = require('express');
const app = express();
// add automated builds of docker hub
app.get('/', (req, res, next) => {
    res.send('Hello from simple servr, version 2');
});

app.listen(3000, () => {
    console.log('simple server is up on port 3000');
});
