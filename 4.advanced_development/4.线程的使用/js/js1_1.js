var json = {
    姓名: "张三",
    性别: "男",
    年龄: 25,
    兴趣爱好: "运动, 唱歌, 看电影"
};

self.onmessage = function (event) {
    self.postMessage(json);
    close();
}
