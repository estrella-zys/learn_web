function $$(id) {
    return document.getElementById(id);
}

var objWorker = new Worker("js/js1_1.js");

function jiazai() {
    objWorker.addEventListener('message', function (event) {
        var strHtml = "";
        var ev = event.data;
        for (var i in ev) {
            strHtml += "<b>" + ev[i] + "</b><span></span>";
        }
        $$("p1").style.display = "block";
        $$("p1").innerHTML = strHtml;
    }, false);

    objWorker.postMessage("");
}
