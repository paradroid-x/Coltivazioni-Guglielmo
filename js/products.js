let check = 0; //serve per vedere se ho già impostato il layout o no

let meth = new Headers({
    method: 'get'
});

async function cercaProdotto(nprod){

    let data = await fetch("http://localhost:8080/?pnumber=" + nprod, meth)
                     .then((data) => {return data.json();})
                     .catch((err) => {console.log(err);});
              
    console.log(data);
    mostraProdotto(nprod, data);
}


function mostraProdotto(prod, res){
    
    var i = parseInt(prod) + 1; //questo serve per ottenere l'immagine giusta, corregge l'offset

    addProductLayout(); // aggiungo il layout giusto per la visualizzazione dei prodotti e controllo che non sia già stato creato
    
    console.log("carico il prodotto: ", res.products[prod].type);

    //queste variabili servono per avere degli shortcut decenti
    const l = document.getElementById("prod-wrapper");
    const title = document.getElementById("prd-title");
    const image = document.getElementById("prd-img");
    const descr = document.getElementById("prd-dsc");
    const price = document.getElementById("prd-price");
  
    title.innerHTML = res.products[prod].type;
    image.src = "img/products/img" + i + ".jpg"; // non uso ww o altro perchè è un singolo url 
    if(res.products[prod].quantity == "0"){ //se non disponibili
        descr.innerHTML = "NON DISPONIBILE";
        price.innerHTML = "--€";
    } else {
        price.innerHTML = "<b>" + res.products[prod].price + "</b>/kg";
        descr.innerHTML = "<b>" + res.products[prod].type + ":</b>" + "<br>" + res.products[prod].descr;
    }      
}

//VIENE RUNNATO SOLO LA PRIMA VOLTA
function addProductLayout(){
    if(check == 1) {
        return;
    } else {
        let l = document.getElementById("prod-wrapper");

        l.setAttribute("style", "border: 2px solid black");

        let t, d, i;
        t = document.createElement("h1");
        t.id = "prd-title"; //titolo

        i = document.createElement("img");
        i.id = "prd-img";   //immagine

        d = document.createElement("p");
        d.id = "prd-dsc";   //descrizione

        p = document.createElement("h1");
        p.id = "prd-price"; //prezzo
        
        l.innerHTML = "<br>";

        l.appendChild(t);
        l.appendChild(i);
        l.appendChild(p);
        l.appendChild(d); 
        
        p.classList.add("p_price");
        d.classList.add("p_descr");
        check = 1;
    }
    
}
