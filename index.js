const express = require('express');
const origin = require('./origin');
const end = require('./end');
const PORT = process.env.PORT || 3001;
const app = express();

//http://localhost:3001/origin
//Route #1
//displays EVERYTHING of origin.js
// app.get('/origin', (request, response) => {
//     response.send(origin);
// })

//Info with at least 5 pieces of data to get
app.get('/origin', (request, response) => {
    response.send(`This mode of transportation is a ${origin.type}. This is route #${origin.route}. This stop is at ${origin.stopName}. The stop ID is ${origin.stopID} and it's stop #${origin.stopNumber} on the route.`);
})
//Spits out: 
//This mode of transportation is a bus. This is route #65. This stop is at Kenmore. The stop ID is 899 and it's stop #1 on the route.

//http://localhost:3001/end
//Route #2
//displays EVERYTHING of end.js
// app.get('/end', (request, response) => {
//     response.send(end);
// })

//Info with at least 5 pieces of data to get
app.get('/end', (request, response) => {
    response.send(`This mode of transportation is a ${end.type}. This is route #${end.route}. This stop is at ${end.stopName}. The stop ID is ${end.stopID} and it's stop #${end.stopNumber} on the route.`);
})
//Spits out: 
//This mode of transportation is a bus. This is route #65. This stop is at Chestnut Hill Ave @ The Veronica Center. The stop ID is 1026 and it's stop #29 on the route.


app.listen(PORT, () => console.log(`My data will load on port ${PORT}`))