document.write("Hello, world!<br>");
document.write(0 / 0 + "<br>");

var a = { user: "张三", sex: "男", age: 20 };

for (var key in a) {
    document.write(key + ":" + a[key] + "<br>")
}