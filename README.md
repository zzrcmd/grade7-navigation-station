# Cloudflare Pages 自动部署示例

这是一个简单的示例项目，展示了如何使用 GitHub Actions 自动将网站部署到 Cloudflare Pages。

## 设置步骤

1. 在 Cloudflare 中创建一个新的 Pages 项目
2. 获取以下信息：
   - Cloudflare API Token
   - Cloudflare Account ID
3. 在 GitHub 仓库的 Settings > Secrets and variables > Actions 中添加以下密钥：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. 修改 `.github/workflows/deploy.yml` 中的 `projectName` 为你的 Cloudflare Pages 项目名称

## 使用方法

1. 将代码推送到 main 分支
2. GitHub Actions 会自动触发部署
3. 部署完成后，可以在 Cloudflare Pages 中查看你的网站

## 本地开发

你可以直接在本地打开 `index.html` 文件来预览网站。

## 注意事项

- 确保你的 Cloudflare API Token 有足够的权限
- 第一次部署可能需要几分钟时间
- 如果遇到部署问题，请检查 GitHub Actions 日志 