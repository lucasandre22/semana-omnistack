const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const UserDashboardController = require('./controllers/UserDashboardController');
const BookingController = require('./controllers/BookingController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

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

routes.post('/users', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', UserDashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;