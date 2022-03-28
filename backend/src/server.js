const express = require('express'); //import express
const routes = require('./routes');
const mongoose = require('mongoose');
const credentials = require('./credentials');

const app = express();

//connection with mongodb atlas
mongoose.connect('mongodb+srv://' + credentials.username + ":" + credentials.password + '@omnistack.qstge.mongodb.net/Omnistack09?retryWrites=true&w=majority')

app.use(express.json());
app.use(routes);


app.listen(7777);