// import your node modules
const express =  require('express');

const db = require('./data/db.js');

// add your server code starting here

const server = express();

const port = 7777;
server.listen(port, console.log(`=-=-= Server Active On Port ${port} =-=-=`));

server.get('/', (request, response) => {
    response.send(`<h1>Welcome to the LOTR Post Server!</h1>`)
})

server.get('/api/posts', (request, response) => {
    db.find()
    .then(posts => response.json(posts))
    .catch(error => response.send(error))
})

server.get('/api/posts/:id', (request, response) => {
    db.findById(request.params.id)
    .then(post => response.json(post))
    .catch(error => response.send(error))
})