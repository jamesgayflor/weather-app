const myApiKey = '10718d7858a0613301b510f200a35240';

// fetching reports for forecast for in an hour

const apiCallLink = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${myApiKey}`;

fetch(apiCallLink)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => {
        console.log(`Error: ${error}`);
    })