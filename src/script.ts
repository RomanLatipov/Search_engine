import * as key from '../apikey.js';

console.log(key);

fetch(key)
.then(res => res.json())
.then(data => console.log(data))