
async function submit() {
    const response = await fetch("http://localhost:5555/key")
    const secretKey = await response.json();
    const key = secretKey.key;

    const search = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=House Of The Dragon`);
    const data = await search.json();
    const res = data.items;

    const value = document.querySelector<HTMLInputElement>("#search").value;
    console.log(value)

    try {
        for (let i = 0; i< res.length; i++) {
            document.getElementById('content').innerHTML +=
            `<form>
                <a href=${res[i].link} target="_blank">${res[i].link}</a>
                <a target="_blank" href=${res[i].link}>
                    <h2>${res[i].title}</h2>
                </a>
                <a>${res[i].htmlSnippet}</a><br>
            </form>`;
        }
    } catch (error) {
        document.getElementById('content').innerHTML = '';
    }

}