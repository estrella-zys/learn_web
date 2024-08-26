var show = '<table style="border-collapse: separate; border-spacing: 0">';
var c;
for (var i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        c = "#f9f9f9";
    } else {
        c = "white";
    }
    show += '<tr style="background-color:' + c + '">';
    for (var j = 1; j <= 6; j++) {
        show += '<td style="width: 50px; text-align: center; border: 1px solid;">' + (i * 6 + j) + '</td>';
    }
    show += '</tr>';
}
show += '</table>';

document.write(show);
