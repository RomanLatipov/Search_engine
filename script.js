async function submit() {
    const response = await fetch("http://localhost:5555/key")
    const secretKey = await response.json();
    const key = secretKey.key;

    const search = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=House Of The Dragon`);
    const data = await search.json();
    const res = data;
    try {
        for (i = 0; i< res.items.length; i++) {
            document.getElementById('content').innerHTML +=
            `<form>
                <a href=${res.items[i].link} target="_blank">${res.items[i].link}</a>
                <a target="_blank" href=${res.items[i].link}>
                    <h2>${res.items[i].title}</h2>
                </a>
                <a>${res.items[i].htmlSnippet}</a><br>
            </form>`;
        }
    } catch (error) {
        document.getElementById('content').innderHTML = '';
    }

}