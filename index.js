const express = require('express');
const origin = require('./origin');
const end = require('./end');
const PORT = process.env.PORT || 3001;
const app = express();

//http://localhost:3001/origin
//ALL data of origin
// app.get('/origin', (request, response) => {
//     response.send(origin);
// })

//origin's type of transportation (bus)
app.get('/origin', (request, response) => {
    response.send(`This mode of transportation is a ${origin.type}. This is route #${origin.route}. This stop is at ${origin.stopName}. The stop ID is ${origin.stopID} and it's stop #${origin.stopNumber} on the route.`);
})

//http://localhost:3001/end
//entire object of end
// app.get('/end', (request, response) => {
//     response.send(end);
// })

//origin's type of transportation (bus)
app.get('/end', (request, response) => {
    response.send(`This mode of transportation is a ${end.type}. This is route #${end.route}. This stop is at ${end.stopName}. The stop ID is ${end.stopID} and it's stop #${end.stopNumber} on the route.`);
})


app.listen(PORT, () => console.log(`My data will load on port ${PORT}`))