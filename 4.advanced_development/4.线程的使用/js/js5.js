var i = -1;
var t = "";
var min = 0;
var sec = 0;
function timedCount() {
    i = i + 1;
    sec = i;
    min = parseInt(sec / 60);
    sec = sec % 60;
    min = min > 9 ? min : "0" + min
    sec = sec > 9 ? sec : "0" + sec

    t = min + ":" + sec;
    postMessage(t);
    setTimeout("timedCount()", 1000);
}

timedCount();