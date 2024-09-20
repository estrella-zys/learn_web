

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
            window.location.href = "login.html"; // 注册成功后跳转
        } catch (e) {
            console.error("无法保存本地存储数据：", e);
            errorDiv.textContent = "无法保存本地存储数据！";
            errorDiv.style.visibility = "visible";
            return false;
        }
    }
}

function register1() {
    window.location.href = "register.html";
}


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
        var error = document.getElementById("error");
        error.style.visibility = "hidden";
        window.location.href = "1.index_denglu.html";
    }
}


function validateLoginForm() {
    event.preventDefault();
    return login(event);
}


function validateForm() {
    event.preventDefault();
    var password = document.getElementById("pa1");
    var confirmPassword = document.getElementById("pa2");
    var error = document.getElementById("error");
    var phone = document.getElementById("phone");

    if (!/^\d{11}$/.test(phone.value)) {
        error.textContent = "手机号码为11位数字！";
        error.style.visibility = "visible";
        return false;
    }

    error.style.visibility = "hidden";

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("两次输入的密码不一致！");

        return false;
    }
    if (!/[a-z]/.test(password.value)) {
        error.textContent = "密码至少包含一个小写字母！";
        error.style.visibility = "visible";
        return false;
    }

    error.style.visibility = "hidden";
    // 调用注册函数
    return register(event); // 确保将 event 对象传递给 register 函数
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