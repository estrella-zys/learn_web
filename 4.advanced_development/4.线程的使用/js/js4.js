function onmessage(event) {
    var inArray = new Array(100);
    var str;
    for (var i = 0; i < 100; i++) {
        inArray[i] = parseInt(Math.random * 100);
    }
    var worker = new Worker("js4_1.js");
    worker.postMessage(JSON.stringify(inArray));
    worker.onmessage = function (event) {
        postMessage(event.data);
    }
}
