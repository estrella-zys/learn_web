onmessage = function (event) {
    var inArray = JSON.parse(event.data);
    var srt = "";
    for (var i = 0; i < inArray.length; i++) {
        if (inArray[i] % 5 == 0) {
            if (str != "") {
                str += ",";
            }
            str += inArray[i];
        }
    }
    this.postMessage(str);
    this.close();
}
