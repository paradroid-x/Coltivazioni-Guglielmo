let w;

function mostraProdotto(prod){
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        
        if(this.readyState == 4 && this.status == 200){ //check della connessione
            var res = new Object();
            var i = parseInt(prod) + 1; //questo schifo serve per ottenere l'immagine giusta
            res = JSON.parse(this.response);

            document.getElementById("prd-img").src = "img/" + i + ".jpg";
            if(res.products[prod].quantity == "0"){ //se non disponibili
                document.getElementById("prd-dsc").innerHTML = "NON DISPONIBILE";
            } else {
                document.getElementById("prd-dsc").innerHTML = res.products[prod].type + " --> " +  res.products[prod].quantity;
            } 

        }
    }
    xhr.open("GET", "db/db.json", true);
    xhr.send();
}
