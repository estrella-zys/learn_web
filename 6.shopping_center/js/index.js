var num = 1;
function rollPic() {
    var img = document.createElement("img");
    img.src = "../image/ad" + num + ".jpg";
    img.style.width = "95%";
    var m = document.getElementById("middle2_2");
    if (m.firstChild) {
        m.removeChild(m.firstChild);
    }
    m.appendChild(img);

    num++;
    if (num > 4) {
        num = 1;
    }
    setTimeout("rollPic()", 3000);
}


function onmouseover1() {
    var a = document.getElementById("text2");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = '生活电器';
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "取暖电器.html">取暖电器</a>'
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "吸尘器.html">吸尘器</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "净化器.html">净化器</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "扫地机器人.html">扫地机器人</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "加湿器.html">加湿器</a>';
    b.appendChild(bt4);

    var bt5 = document.createElement("button");
    bt5.innerHTML = '<a href = "电熨斗.html">电熨斗</a>';
    b.appendChild(bt5);

    var bt6 = document.createElement("button");
    bt6.innerHTML = '<a href "电风扇.html">电风扇</a>';
    b.appendChild(bt6);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "厨房电器";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电饭煲.html">电饭煲</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "微波炉.html">微波炉</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电烤箱.html">电烤箱</a>';
    b1.appendChild(bt10);

    var bt11 = document.createElement("button");
    bt11.innerHTML = '<a href = "电压力锅.html">电压力锅</a>';
    b1.appendChild(bt11);

    var bt12 = document.createElement("button");
    bt12.innerHTML = '<a href = "电水壶.html">电水壶</a>';
    b1.appendChild(bt12);

    var bt13 = document.createElement("button");
    bt13.innerHTML = '<a href = "电水壶.html">电水壶</a>';
    b1.appendChild(bt13);

    var bt14 = document.createElement("button");
    bt14.innerHTML = '<a href = "咖啡机.html">咖啡机</a>';
    b1.appendChild(bt14);

    var bt15 = document.createElement("button");
    bt15.innerHTML = '<a href = "榨汁机.html">';
    b1.appendChild(bt15);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>美的</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>格力</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>海尔</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>飞利浦</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>海信</a>";
    b2.appendChild(p7);
}


function onmouseover3() {
    var a = document.getElementById("text3");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = '设备';
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "手机.html">手机</a>'
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电脑.html">电脑</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "路由器.html">显示器</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "游戏机.html">游戏机</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电视.html">电视</a>';
    b.appendChild(bt4);

    var bt6 = document.createElement("button");
    bt6.innerHTML = '<a href = "投影仪.html">投影仪</a>';
    b.appendChild(bt6);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "数码元件";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "路由器.html">路由器</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "主机.html">主机</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "U盘.html">U盘</a>';
    b1.appendChild(bt10);

    var bt11 = document.createElement("button");
    bt11.innerHTML = "<a href = '电池.html'>电池</a>"
    b1.appendChild(bt11);

    var bt12 = document.createElement("button");
    bt12.innerHTML = '<a href = "充电器.html">充电器</a>'
    b1.appendChild(bt12);

    var bt13 = document.createElement("button");
    bt13.innerHTML = '<a href = "电源.html">存储器</a>'
    b1.appendChild(bt13);

    var bt16 = document.createElement("button");
    bt16.innerHTML = '<a href = "鼠标.html">鼠标</a>';
    b1.appendChild(bt16);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>小米</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>Sony</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>华为</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>apple</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>三星</a>";
    b2.appendChild(p7);
}



function onmouseover4() {
    var a = document.getElementById("text4");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "家具";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">卧室家具</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">客厅家具</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "电源.html">餐厅家具</a>';
    b.appendChild(bt2);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电源.html">书房家具</a>';
    b.appendChild(bt4);

    var bt5 = document.createElement("button");
    bt5.innerHTML = '<a href = "电源.html">儿童家具</a>';
    b.appendChild(bt5);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "厨具";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电源.html">烹饪厨具</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">刀剪菜板</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电源.html">水具酒具</a>';
    b1.appendChild(bt10);

    var bt11 = document.createElement("button");
    bt11.innerHTML = '<a href = "电源.html">菜具</a>';
    b1.appendChild(bt11);

    var bt12 = document.createElement("button");
    bt12.innerHTML = '<a href = "电源.html">咖啡具</a>';
    b1.appendChild(bt12);


    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>全友家居</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>曲美家具</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>红苹果</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>飞联邦家私</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>宜家</a>";
    b2.appendChild(p7);
}

function onmouseover5() {
    var a = document.getElementById("text5");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "卤味";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">鸡脖/鸭脖</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">鸡翅/鸭翅</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "电源.html">鸭锁骨</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "电源.html">猪皮</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电源.html">猪蹄</a>';
    b.appendChild(bt4);

    var bt5 = document.createElement("button");
    bt5.innerHTML = '<a href = "电源.html">鸡爪/鸭爪</a>';
    b.appendChild(bt5);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = '熟食';
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电源.html">凉菜</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">咸菜</a>';
    b1.appendChild(bt9);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>周黑鸭</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>绝味鸭脖</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>老干妈</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>煌上煌</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>紫燕百味鸡</a>";
    b2.appendChild(p7);
}


function onmouseover6() {
    var a = document.getElementById("text6");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "坚果";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">夏威夷果</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">杏仁</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "电源.html">开心果</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "电源.html">松子</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电源.html">核桃</a>';
    b.appendChild(bt4);

    var bt5 = document.createElement("button");
    bt5.innerHTML = '<a href = "电源.html">榛子</a>';
    b.appendChild(bt5);

    var bt6 = document.createElement("button");
    bt6.innerHTML = '<a href = "电源.html">瓜子</a>';
    b.appendChild(bt6);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "炒货";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电源.html">糖炒栗子</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">麻辣花生</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电源.html">蚕豆</a>';
    b1.appendChild(bt10);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>恰恰</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>阿明</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>真心</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>旺瓜</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>达利园</a>";
    b2.appendChild(p7);
}


function onmouseover7() {
    var a = document.getElementById("text7");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "糖果";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">奶糖</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">果汁软糖</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "电源.html">酥糖</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "电源.html">夹心糖</a>';
    b.appendChild(bt3);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "蜜饯";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电源.html">果脯</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">凉果</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电源.html">果丹皮</a>';
    b1.appendChild(bt10);

    var bt11 = document.createElement("button");
    bt11.innerHTML = '<a href = "电源.html">苏式蜜饯</a>';
    b1.appendChild(bt11);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>阿尔卑斯</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>大白兔</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>徐福记</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>飞金冠</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>旺仔</a>";
    b2.appendChild(p7);
}


function onmouseover8() {
    var a = document.getElementById("text8");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "糖果";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">白巧克力</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">代可可脂巧克力</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "电源.html">牛奶巧克力</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "电源.html">夹心巧克力</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电源.html">黑巧克力</a>';
    b.appendChild(bt4);

    var bt5 = document.createElement("button");
    bt5.innerHTML = '<a href = "电源.html">白巧克力</a>';
    b.appendChild(bt5);

    var bt6 = document.createElement("button");
    bt6.innerHTML = '<a href = "电源.html">果仁巧克力</a>';
    b.appendChild(bt6);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "饮品";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电源.html">可可粉</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">热巧克力</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电源.html">巧克力牛奶</a>';
    b1.appendChild(bt10);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>德芙</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>瑞士莲</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>吉利莲</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>费列罗</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>歌帝梵</a>";
    b2.appendChild(p7);
}


function onmouseover9() {
    var a = document.getElementById("text9");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "海鲜";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">鱼类</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">龙虾</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "电源.html">螃蟹</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "电源.html">贝类</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电源.html">藻类</a>';
    b.appendChild(bt4);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "当季主推";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = "";
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">鲍鱼</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电源.html">章鱼</a>';
    b1.appendChild(bt10);

    var bt11 = document.createElement("button");
    bt11.innerHTML = '<a href = "电源.html">海胆</a>';
    b1.appendChild(bt11);

    var bt12 = document.createElement("button");
    bt12.innerHTML = '<a href = "电源.html">扇贝</a>';
    b1.appendChild(bt12);

    var bt13 = document.createElement("button");
    bt13.innerHTML = '<a href = "电源.html">海螺</a>';
    b1.appendChild(bt13);

    var bt14 = document.createElement("button");
    bt14.innerHTML = '<a href = "电源.html">龙头鱼</a>';
    b1.appendChild(bt14);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>獐子岛</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>明珠</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>远洋</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>中水</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>兴业</a>";
    b2.appendChild(p7);
}

function onmouseover10() {
    var a = document.getElementById("text10");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "水果";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">西瓜/蜜瓜</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">葡提浆果</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = '<a href = "电源.html">热带水果</a>';
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "电源.html">桃李杏枣</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电源.html">榴莲/柠檬</a>';
    b.appendChild(bt4);

    var bt5 = document.createElement("button");
    bt5.innerHTML = '<a href = "电源.html">果切礼盒</a>';
    b.appendChild(bt5);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "茶叶";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电源.html">红茶</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">绿茶</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电源.html">青茶</a>';
    b1.appendChild(bt10);

    var bt11 = document.createElement("button");
    bt11.innerHTML = '<a href = "电源.html">果茶</a>';
    b1.appendChild(bt11);

    var bt12 = document.createElement("button");
    bt12.innerHTML = '<a href = "电源.html">花茶</a>';
    b1.appendChild(bt12);

    var merchandiser = document.createElement("div");
    merchandiser.className = "merchandiser";
    a.appendChild(merchandiser);

    var p2 = document.createElement("div");
    p2.className = "merchandiser_p";
    p2.innerHTML = "实力商家";
    merchandiser.appendChild(p2);

    var b2 = document.createElement("div");
    b2.className = "merchandiser_b";
    merchandiser.appendChild(b2);

    var p3 = document.createElement("div");
    p3.className = "merchandiser_b_p";
    p3.innerHTML = "<a href = 'http://www.meidi.com'>百果园</a> |&nbsp";
    b2.appendChild(p3);

    var p4 = document.createElement("div");
    p4.className = "merchandiser_b_p";
    p4.innerHTML = "<a href = 'http://www.geli.com'>天福茗茶</a> |&nbsp";
    b2.appendChild(p4);

    var p5 = document.createElement("div");
    p5.className = "merchandiser_b_p";
    p5.innerHTML = "<a href = 'http://www.haier.com'>果多多</a> |&nbsp";
    b2.appendChild(p5);

    var p6 = document.createElement("div");
    p6.className = "merchandiser_b_p";
    p6.innerHTML = "<a href = 'http://www.feilpu.com'>西湖龙井</a> |&nbsp";
    b2.appendChild(p6);

    var p7 = document.createElement("div");
    p7.className = "merchandiser_b_p";
    p7.innerHTML = "<a href = 'http://www.guolu.com'>信阳毛尖</a>";
    b2.appendChild(p7);
}

function onmouseover11() {
    var a = document.getElementById("text11");
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
    var electric = document.createElement("div");
    electric.className = "electrical";
    a.appendChild(electric);

    var life = document.createElement("div");
    life.className = "electrical_life";
    electric.appendChild(life);

    var p = document.createElement("div");
    p.className = "electrical_life_p";
    p.innerHTML = "活动商家";
    life.appendChild(p);

    var b = document.createElement("div");
    b.className = "electrical_b";
    life.appendChild(b);

    var bt = document.createElement("button");
    bt.innerHTML = '<a href = "电源.html">美汁源</a>';
    b.appendChild(bt);

    var bt1 = document.createElement("button");
    bt1.innerHTML = '<a href = "电源.html">乐事</a>';
    b.appendChild(bt1);

    var bt2 = document.createElement("button");
    bt2.innerHTML = "vivo";
    b.appendChild(bt2);

    var bt3 = document.createElement("button");
    bt3.innerHTML = '<a href = "电源.html">双汇</a>';
    b.appendChild(bt3);

    var bt4 = document.createElement("button");
    bt4.innerHTML = '<a href = "电源.html">小米</a>';
    b.appendChild(bt4);

    var kitchen = document.createElement("div");
    kitchen.className = "electrical_life";
    electric.appendChild(kitchen);

    var p1 = document.createElement("div");
    p1.className = "electrical_life_p";
    p1.innerHTML = "商场活动";
    kitchen.appendChild(p1);

    var b1 = document.createElement("div");
    b1.className = "electrical_b";
    kitchen.appendChild(b1);

    var bt8 = document.createElement("button");
    bt8.innerHTML = '<a href = "电源.html">买一赠一</a>';
    b1.appendChild(bt8);

    var bt9 = document.createElement("button");
    bt9.innerHTML = '<a href = "电源.html">以旧换新</a>';
    b1.appendChild(bt9);

    var bt10 = document.createElement("button");
    bt10.innerHTML = '<a href = "电源.html">优选好货</a>';
    b1.appendChild(bt10);

}

function top1() {
    window.scrollTo(0, 0);
}

function insert() {

}


window.onload = function () {
    rollPic();
    var currentUser = localStorage.getItem("currentUser");
    var carNumElement = document.getElementById("carNum");

    if (currentUser) {
        var carts = JSON.parse(localStorage.getItem("cart")) || [];
        var cart = carts.find(cart => cart.phone === currentUser);

        if (cart) {
            carNumElement.innerText = cart.carNum; // 更新购物车数量
        } else {
            carNumElement.innerText = 0; // 没有购物车数据则显示0
        }
    }
}


