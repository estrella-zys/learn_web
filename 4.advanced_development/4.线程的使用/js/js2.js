
onmessage = function (event) {
    var n = event.data;
    var arr = n.split("@");
    var result = 0;
    for (var i = arr[0]; i <= arr[1]; i++) {
        result += parseInt(i);
    }
    postMessage(result);
}