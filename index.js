const http = require('http');

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
    // 设置响应头
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // 发送响应内容
    res.end('Hello, World!\n');
});

// 监听端口
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});    