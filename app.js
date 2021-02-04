const express = require('express');
const app = express();

app.use(express.static('public'));
console.log('heyo');

app.get('/home', (request, response) => {
    //This code inside will run when hit
    //=>localhost:3000/home
    //response.send('<h1>Welcome, Miguel!!!</h1>');
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response) => {
    //This code inside will run when hit
    //=>localhost:3000/home
    //response.send('<h1>Welcome, Miguel!!!</h1>');
    response.sendFile(__dirname + '/views/about-page.html');
});

/*app.get('/home', (request, response) => {
    //This code inside will run when hit
    //=>localhost:3000/home
    //response.send('<h1>Welcome, Miguel!!!</h1>');
    response.sendFile(__dirname + '/views/home-page.html');
});*/

app.listen(5000, () => {
    console.log('My app is listening');
});