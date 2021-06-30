const express = require('express');
const backendApp = express();
const port = 5000;


backendApp.get('/random-api', (req,res)=> {
    res.send('hello whatsup');
})

backendApp.listen(5000, () => {
    console.log('server is active on 5000')
})

