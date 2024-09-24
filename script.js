

async function submit() {
    const response = await fetch("http://localhost:5555/key")
    const secretKey = await response.json();
    const key = secretKey.key;

    const repsonse = fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=House Of The Dragon`);
    const data = (await repsonse).json();
    console.log(data);

}