console.log("hello world")
fetch("http://localhost:5555/key")
.then(res => res.json())
.then(data => console.log(data))