addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const html = `
  <!DOCTYPE html>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #f4f4f9;
      }
      .button-container {
        text-align: center;
      }
      button {
        display: block;
        width: 200px;
        padding: 15px 30px;
        margin: 15px;
        border: none;
        border-radius: 5px;
        background-color: #007BFF;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      button:hover {
        background-color: #0056b3;
      }
    </style>
    <title>服务器选择</title>
  </head>
  <body>
    <div class="button-container">
      <button onclick="window.location.href='http://zzr.bic.fun:28777'">主服务器 1panel</button>
      <button onclick="window.location.href='http://zzr.bioc.fun:28666'">副服务器 1panel</button>
    </div>
  </body>
  </html>
  `;

  return new Response(html, {
    headers: { 'content-type': 'text/html' },
  });
}
