// 引入 Express 模块
const express = require('express');

// 创建 Express 应用程序实例
const app = express();

// 定义端口号
const PORT = 3000;

// 定义根路径 ('/') 的 GET 请求处理程序
app.get('/', (req, res) => {
  // 发送 "Hello World!" 响应
  res.send('Hello World!');
});

// 让应用在指定端口上监听
app.listen(PORT, () => {
  console.log(`Hello World 应用正在监听端口 ${PORT}`);
  console.log(`请在浏览器中访问 http://localhost:${PORT}`);
});
