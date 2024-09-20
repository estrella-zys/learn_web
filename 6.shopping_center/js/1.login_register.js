var code1;
function sendCode1(event) {
    event.preventDefault();
    var phone = document.getElementById("phone").value;
    var users = JSON.parse(localStorage.getItem("user")) || [];
    var flag = users.some(user => user.phone === phone);
    var errorDiv = document.getElementById("error");

    if (phone === "") {
        errorDiv.textContent = "手机号码不能为空！";
        errorDiv.style.visibility = "visible";
        return false;
    }
    errorDiv.style.visibility = "hidden";

    code1 = "";
    for (var i = 0; i < 4; i++) {
        code1 += Math.floor(Math.random() * 10);
    }

    alert("验证码为：" + code1);
    dTime1();
}

var timer1 = 60;
function dTime1() {
    var user = timer1 + "s后重发";
    var button = document.getElementById("checkCode");
    button.value = user;
    if (timer1 > 0) {
        timer1--;
        setTimeout(dTime1, 1000);
    } else {
        timer1 = 60;
        button.value = "获取验证码";
    }
}

function register(event) {
    event.preventDefault(); // 防止表单默认提交
    var errorDiv = document.getElementById("error");
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("pa1").value;
    var users = JSON.parse(localStorage.getItem("user")) || [];
    var flag = users.some(user => user.phone === phone);

    if (flag) {
        console.log("用户已存在！");
        errorDiv.textContent = "用户已存在！";
        errorDiv.style.visibility = "visible";
        return false; // 阻止表单提交
    } else {
        var newUser = {
            username: username,
            phone: phone,
            password: password
        };
        users.push(newUser);
        try {
            localStorage.setItem("user", JSON.stringify(users));
            alert("注册成功！");
            window.location.href = "1.login.html"; // 注册成功后跳转
        } catch (e) {
            console.error("无法保存本地存储数据：", e);
            errorDiv.textContent = "无法保存本地存储数据！";
            errorDiv.style.visibility = "visible";
            return false;
        }
    }
}

function register1() {
    window.location.href = "1.register.html";
}

var currentUser;

function login(event) {
    event.preventDefault();
    var inputTel = document.getElementById("tel").value;
    var inputPassword = document.getElementById("pa1").value;
    var users = JSON.parse(localStorage.getItem("user")) || [];
    var flag = users.find(user => user.phone === inputTel && user.password === inputPassword);
    if (!flag) {
        var error = document.getElementById("error");
        error.style.visibility = "visible";
    } else {
        localStorage.setItem("currentUser", inputTel);
        var error = document.getElementById("error");
        error.style.visibility = "hidden";
        window.location.href = "3.html";
        updateCartDisplay();
    }
}

function validateLoginForm() {
    event.preventDefault();
    return login(event);
}

function validateForm(event) {
    event.preventDefault();
    var password = document.getElementById("pa1");
    var confirmPassword = document.getElementById("pa2");
    var errorDiv = document.getElementById("error");
    var phone = document.getElementById("phone");
    var inputCode = document.getElementById("inputCode").value; // 获取输入的验证码

    if (!/^\d{11}$/.test(phone.value)) {
        errorDiv.textContent = "手机号码为11位数字！";
        errorDiv.style.visibility = "visible";
        return false;
    }

    errorDiv.style.visibility = "hidden";

    if (password.value !== confirmPassword.value) {
        errorDiv.textContent = "两次输入的密码不一致！";
        errorDiv.style.visibility = "visible";
        return false;
    }
    errorDiv.style.visibility = "hidden";

    if (!/[a-z]/.test(password.value)) {
        errorDiv.textContent = "密码至少包含一个小写字母！";
        errorDiv.style.visibility = "visible";
        return false;
    }

    errorDiv.style.visibility = "hidden";

    if (inputCode === "") {
        errorDiv.textContent = "验证码不能为空！";
        errorDiv.style.visibility = "visible";
        return false;
    }
    errorDiv.style.visibility = "hidden";

    if (inputCode !== code1) {
        errorDiv.textContent = "验证码错误！";
        errorDiv.style.visibility = "visible";
        return false;
    }
    errorDiv.style.visibility = "hidden";

    return register(event);
}

function register1() {
    window.location.href = "1.register.html";
}



function validateLoginForm() {
    event.preventDefault();
    return login(event);
}




function visible1() {
    var pa = document.getElementById("pa1");
    var p = document.getElementById("p1");
    if (pa.type === "password") {
        pa.type = "text";
        p.src = "../image/zhengyan.png";
    } else if (pa.type === "text") {
        pa.type = "password";
        p.src = "../image/biyan.png";
    }
}

function visible2() {
    var pa = document.getElementById("pa2");
    var p = document.getElementById("p2");
    if (pa.type === "password") {
        pa.type = "text";
        p.src = "../image/zhengyan.png";
    } else if (pa.type === "text") {
        pa.type = "password";
        p.src = "../image/biyan.png";
    }
}

function findForm() {
    event.preventDefault();
    var errorDiv = document.getElementById("error");
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("pa1").value;
    var confirmPassword = document.getElementById("pa2").value;
    var users = JSON.parse(localStorage.getItem("user")) || [];
    var flag = users.some(user => user.phone === phone);

    // 验证手机号码格式
    if (!/^\d{11}$/.test(phone)) {
        errorDiv.textContent = "手机号码为11位数字！";
        errorDiv.style.visibility = "visible";
        return false;
    }

    // 验证密码一致性
    if (password !== confirmPassword) {
        errorDiv.textContent = "两次输入的密码不一致！";
        errorDiv.style.visibility = "visible";
        return false;
    }

    // 验证密码是否包含小写字母
    if (!/[a-z]/.test(password)) {
        errorDiv.textContent = "密码至少包含一个小写字母！";
        errorDiv.style.visibility = "visible";
        return false;
    }

    // 判断用户是否存在
    if (!flag) {
        errorDiv.textContent = "用户不存在！";
        errorDiv.style.visibility = "visible";
        return false;
    } else {
        // 修改用户密码
        for (var i = 0; i < users.length; i++) {
            if (users[i].phone === phone) {
                users[i].password = password;
                break;
            }
        }

        try {
            localStorage.setItem("user", JSON.stringify(users));
            alert("修改成功！");
            window.location.href = "login.html";

        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                console.error("存储空间已满：", e);
                errorDiv.textContent = "存储空间已满！";
            } else {
                console.error("无法保存本地存储数据：", e);
                errorDiv.textContent = "无法保存本地存储数据！";
            }
            errorDiv.style.visibility = "visible";
            return false;
        }
    }
}


var code;
function sendCode() {
    event.preventDefault();

    var phone = document.getElementById("phone").value;
    var users = JSON.parse(localStorage.getItem("user")) || [];
    var flag = users.some(user => user.phone === phone);
    var errorDiv = document.getElementById("error");


    if (phone === "") {
        errorDiv.textContent = "手机号码不能为空！";
        errorDiv.style.visibility = "visible";
        return false;
    }

    if (!flag) {
        errorDiv.textContent = "用户不存在！";
        errorDiv.style.visibility = "visible";
        return false;
    }
    errorDiv.style.visibility = "hidden";

    code = "";
    for (var i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10);
    }
    alert("验证码为：" + code);
    dTime();
}

var timer = 60;
function dTime() {
    var user = timer + "s后重发";
    var button = document.getElementById("checkCode");
    button.value = user;
    if (timer > 0) {
        timer--;
        setTimeout(dTime, 1000);
    } else {
        timer = 60;
        button.value = "获取验证码";
    }

}

function validatePhoneForm() {
    event.preventDefault();
    var inputCode = document.getElementById("inputCode").value;
    var errorDiv = document.getElementById("error");

    if (inputCode === "") {
        errorDiv.textContent = "验证码不能为空！";
        errorDiv.style.visibility = "visible";
        return false;
    }
    errorDiv.style.visibility = "hidden";

    if (inputCode !== code) {
        errorDiv.textContent = "验证码错误！";
        errorDiv.style.visibility = "visible";
        return false;
    } else {
        window.location.href = "3.html";
        return true;
    }
}

// 登陆成功后个人信息存储功能

// 购物车功能
function addCart(event) {
    event.preventDefault();
    var currentUser = localStorage.getItem("currentUser");
    var carts = JSON.parse(localStorage.getItem("cart")) || [];
    var cart = carts.find(cart => cart.phone === currentUser);
    console.error(currentUser);
    if (cart) {
        cart.carNum++;
        console.error("加一失败")
    } else {
        cart = {
            phone: currentUser,
            carNum: 1
        };
        carts.push(cart);
        console.error("添加信息成功")
    }

    localStorage.setItem("cart", JSON.stringify(carts));
    var carNumElement = document.getElementById("carNum");
    carNumElement.innerText = cart.carNum;

}



function updateDisplay() {
    var currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        var carts = JSON.parse(localStorage.getItem("cart")) || [];
        var cart = carts.find(cart => cart.phone === currentUser);

        var carNumElement = document.getElementById("carNum");
        if (cart) {
            carNumElement.innerText = cart.carNum;
        } else {
            carNumElement.innerText = 0;
        }
    }
}

// 在页面加载时调用
window.onload = function () {
    updateCartDisplay();
}


