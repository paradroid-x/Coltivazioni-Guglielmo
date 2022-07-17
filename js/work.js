let meth = new Headers({
    method: 'get',
    mode: 'no-cors'
});

async function prendiImg(img){
    let data = await fetch("http://localhost:9090/?imgnumber=" + img, meth)
                     .then((data) => {return data.text()})
                     .catch((err) => {console.log("ERRORE:", err)});
    return data;
}

const max = 9; //numero di foto da caricare

for(var i = 0; i < max; i++){
    var j = (i%3)+1;
    console.log(j);
    var img = prendiImg(j);
    postMessage(img);
}