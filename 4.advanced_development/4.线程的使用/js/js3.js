

onmessage = function(event) {
    var data = event.data;
    var a = data.split(",");
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (parseInt(a[i]) % 5 == 0) {
            if (b != "") {
                b += ",";
            }
            b += a[i];
        }
    }
    postMessage(b);
}
