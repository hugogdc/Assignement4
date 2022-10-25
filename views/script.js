const btn = document.getElementById('btn');
btn.addEventListener("click", surprise);

function surprise(){
    console.log("btn pressed !");
    var entryValue = document.getElementById("txt").value;

    if (entryValue != ""){
        var xhttp = new XMLHttpRequest();
        const params = `name=${entryValue}`
        xhttp.open("GET", "getLength?" + params, true);
        xhttp.send();
        console.log("AJAX request sent : " + params);

        xhttp.addEventListener('load', function(){
            if (xhttp.status === 200 && xhttp.readyState === 4){
                var response = JSON.parse(xhttp.responseText);
                console.log("AJAX response : " + xhttp.responseText);
                document.getElementById("nbOfChar").innerHTML = `${response.name} has : ${response.lenght} letters (computed by the server)`;
                document.getElementById("txt").value = "";
            } else {
                console.error("Bad request");
            }

        })
    }
}