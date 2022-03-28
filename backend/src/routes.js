const express = require('express');

const routes = express.Router();

//methods
//GET:get information
//POST:create new information in backend
//PUT: edit information
//DELETE: delete information
routes.get('/', (req, res) => { 
    return res.json({ message: "Hello world!" });
}); //the first parameter: route to access the application. 
//The callback parameters: 
//req -> get informations that the user is sending to the requisition
//res -> response that the user will get

//everytime I make a request with insomnia with put method and with address http://localhost:7777/SOMETHING, SOMETHING will be the id
routes.put('/users/:id', (req, res) => {
    //req.params: access route params (edit and delete)
    return res.json({ message: req.params.id });
})

routes.post('/users', (req, res) => {
    //req.query: access queries (filters)
    //req.body: access json
    return res.json(req.body);
})

module.exports = routes;