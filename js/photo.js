/*
<a class="nav-item nav-link" id="nav-link" href="photos.html">Foto</a>

<div class="container">
          <br>
          <div class="p-link">
            <div id="text-wrapper" class="row">
              <div class="col-lg" id="side-text">
                <h3>Sottotitolo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas fugiat quisquam rem est praesentium fugit laborum dolor. Atque deserunt inventore animi enim omnis suscipit fuga ducimus autem qui distinctio?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore porro voluptatum sunt unde voluptas eos eveniet, cumque quia, sed velit magni non animi fugiat dolorum. Quos iste quo qui!
                </p>
                <a href="photos.html">
                  <button class="btn" id="shortcut">
                    Guarda le foto <img src="img/svg/arrow.svg" height="20px" width="20px">
                  </button>
                </a>
              </div>
              
              <br>
    
              <div class="col-lg">
                <br>
                <img src="img/img3.jpg" alt="immagine" class="img-fluid">
              </div>
            
            </div>
          </div>
          <br>
        </div>
/*

let worker = undefined; // creo il worker
const i = 1;

worker = new Worker("js/work.js");

worker.onmessage = (data) => {
    var block = document.getElementById("img-" + i);
    i++;
    block.src = data;
}

worker.terminate();


/*

//SERVER PER CHIAMATA WW
const serverWW = http.createServer((req, res) => {

    var q = url.parse(req.url, true).query;
    let img = q.imgnumber;
    var ret = cercaImg(img);
    res.writeHead(200, {'Content-Type' : 'text/uri-list', 'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods': 'post, get', 'Access-Control-Allow-Headers': 'Content-Type'});
    res.end(ret + '\n');
}).listen(9090);

function cercaImg(img){
    let link = "./img/" + img + ".jpeg";
    console.log(link);
    return link;
}


*/