function submit() {
    document.getElementById('content').innerHTML = '';
    var val = document.getElementById('search').value;
    var newElement = document.createElement('script');
    newElement.src = token+`${val}`+token_end;;
    newElement.id="mainscript";
    document.body.appendChild(newElement);
};