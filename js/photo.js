const worker = undefined; // creo il worker
const i = 1;

worker = new Worker("js/work.js");

worker.onmessage = (data) => {
    var block = document.getElementById("img-" + i);
    i++;
    block.src = data;
}

worker.terminate();
