# 七年级导航站

这是一个为七年级学生设计的导航网站，提供各学科学习资源的快速访问。

## 功能特点

- 简洁美观的界面设计
- 响应式布局，支持各种设备
- 学科分类导航
- 自动更新时间显示

## 学科导航

目前包含以下学科导航：
- 语文学习
- 数学学习
- 英语学习
- 物理学习
- 化学学习
- 生物学习

## 技术栈

- HTML5
- CSS3
- JavaScript
- GitHub Actions
- Cloudflare Pages

## 部署说明

本项目使用 GitHub Actions 自动部署到 Cloudflare Pages。

### 部署步骤

1. 在 Cloudflare 中创建一个新的 Pages 项目
2. 获取以下信息：
   - Cloudflare API Token
   - Cloudflare Account ID
3. 在 GitHub 仓库的 Settings > Secrets and variables > Actions 中添加以下密钥：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. 修改 `.github/workflows/deploy.yml` 中的 `projectName` 为你的 Cloudflare Pages 项目名称

## 本地开发

你可以直接在本地打开 `index.html` 文件来预览网站。

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 许可证

MIT License 