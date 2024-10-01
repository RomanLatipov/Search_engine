async function submit() {
    const response = await fetch("http://localhost:5555/key");
    const secretKey = await response.json();
    const key = secretKey.key;
    const value = document.querySelector("#search").value;
    const search = await fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=${value}`);
    const data = await search.json();
    const res = data.items;
    try {
        document.getElementById('content').innerHTML += `<div style="color: white;">Top 10 results in about
        (${data.searchInformation.formattedSearchTime} seconds)`;
        for (let i = 0; i < res.length; i++) {
            document.getElementById('content').innerHTML +=
                `<form style="margin-top: 20px; padding: 30px; width: 50vmax; border-radius: 15px; background: rgba(34, 40, 52, 1);">
                <a style="font-size: 20px; color: white; text-decoration: none;" href=${res[i].link} target="_blank">${res[i].link}</a>
                <a target="_blank" href=${res[i].link} style="text-decoration: none;">
                    <h2 style="font-size: 30px; color: white;">${res[i].title}</h2>
                </a>
                <a style="color: white">${res[i].htmlSnippet}</a><br>
            </form>`;
        }
    }
    catch (error) {
        document.getElementById('content').innerHTML = '';
    }
}
//# sourceMappingURL=script.js.map