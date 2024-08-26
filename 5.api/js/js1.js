var strOrigin = 'http://172.0.0.1:5500';

function pageLoad() {
    window.addEventListener('message', function (event) {
        if (event.origin === strOrigin) {
            document.getElementById("pStatus").style.display = "block";
            document.getElementById("pStatus").innerHTML = event.data;
        }
    }, false);
}

function btnSend() {
    var strMsg = document.getElementById("txt").value;
    if (strMsg.length > 0) {
        document.getElementById("ifa").contentWindow.postMessage(strMsg, strOrigin);
        document.getElementById("txt").value = "";
    }
}

function PageLoadForMessage() {
    window.addEventListener('message', function (event) {
        if (event.origin === strOrigin) {
            var str = "<span><b>" + event.data + "</b>位随机数为：<b>" + RetRndNum(event.data) + "</b></span>";
            event.source.postMessage(str, event.origin);
        }
    }, false);
}

function RetRndNum(n) {
    var str = "";
    for (var i = 0; i < n; i++) {
        str += Math.floor(Math.random() * 10);
    }
    return str;
}
