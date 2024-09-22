import key from '../apikey.js';
console.log(key);
fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyAh9vdfep3bXNvf27DqU-GSwnQGwB25DDQ&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=House Of The Dragon")
    .then(res => res.json())
    .then(data => console.log(data));
