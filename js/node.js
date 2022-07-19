const http = require('http');
const fs = require('fs');
const url = require('url');

//SERVER PER CHIAMATA PRODOTTI
const size = 12; // dimensione del database


const server = http.createServer((req, res) => {

    var q = url.parse(req.url, true).query;
    let prod = q.pnumber;
    
    if(prod >= size){
        res.writeHead(404);
        res.end('Data not found!');
    }
    var p = cerca();    
    console.log("carico il file...");
    console.log(p);
    res.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*',
     'Access-Control-Allow-Methods': 'post, get', 'Access-Control-Allow-Headers': 'Content-Type'});
    res.end(p + '\n');
}).listen(8080);

function cerca(){
    let d = fs.readFileSync("db/database.json", "utf-8");
    console.log(d);
    return d;
}
