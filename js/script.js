
let w;

function mostraProdotto(prod){
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var res = new Object();
        res = JSON.parse(this.response);
        
        if(res.products[prod].quantity == "0"){ //se non disponibili va a finire qui
            document.getElementById("body-wrapper").innerHTML = "NON DISPONIBILE";
        } else {
            document.getElementById("body-wrapper").innerHTML = res.products[prod].type + " --> " +  res.products[prod].quantity;
        }
    }
    xhr.open("GET", "db/db.json", true);
    xhr.send();
}