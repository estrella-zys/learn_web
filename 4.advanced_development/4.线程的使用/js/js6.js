onmessage = function (event) {
    var data = parseInt(event.data, 10);


    var result = 0;
    for (var i = 1; i <= data; i++) {
        result += i;
    }
    postMessage(result);
}
