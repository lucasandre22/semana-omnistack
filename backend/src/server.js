const express = require('express') //import express

const app = express();
app.use(express.json());

//methods GET:get information, POST:create new information in backend , PUT: edit information, DELETE: delete information, 
app.get('/', (req, res) => { 
    return res.json({ message: "Hello world!" });
}); //the first parameter: route to access the application. 
//The callback parameters: 
//req -> get informations that the user is sending to the requisition
//res -> response that the user will get

app.post('/users', (req, res) => {
    //req.query: access queries (filters)
    //req.body: access json
    return res.json(req.body);
})

//everytime I make a request with insomnia with put method and with address http://localhost:7777/SOMETHING, SOMETHING will be the id
app.put('/users/:id', (req, res) => {
    //req.params: access route params (edit and delete)
    return res.json({ message: req.params.id });
})
app.listen(7777);