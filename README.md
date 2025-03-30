# 七年级导航站

这是一个为七年级学生设计的导航网站，提供各学科学习资源的快速访问。网站采用现代化的设计理念，具有优雅的视觉效果和流畅的用户体验。

## 功能特点

- 🎨 现代简约的界面设计
  - 毛玻璃效果的内容区域
  - 优雅的阴影和过渡效果
  - 自适应背景图片显示
  
- 📱 完全响应式布局
  - 适配桌面和移动设备
  - 智能调整导航按钮布局
  - 优化的移动端字体大小

- 🔄 动态内容更新
  - 随机切换背景图片（每5分钟）
  - 实时更新时间显示（每分钟）
  - 平滑的动画过渡效果

- 🎯 用户交互优化
  - 悬停时的按钮动画效果
  - 清晰的视觉反馈
  - 优化的触摸屏体验

## 学科导航

目前包含以下学科导航：
- 📚 语文学习
- 📐 数学学习
- 🌍 英语学习
- ⚡ 物理学习
- 🧪 化学学习
- 🧬 生物学习

## 技术实现

- **前端技术**
  - HTML5 语义化标签
  - CSS3 现代特性
    - Flexbox 布局
    - Grid 系统
    - 媒体查询
    - 背景图片优化
    - 毛玻璃效果
  - 原生 JavaScript
    - DOM 操作
    - 定时器管理
    - 事件处理

- **设计特性**
  - 模块化的 CSS 结构
  - 响应式设计原则
  - 移动优先策略
  - 无障碍设计考虑

## 项目结构

```
grade7-navigation-station/
├── index.html          # 主页面
├── images/            # 背景图片目录
│   ├── background1.jpg
│   ├── background2.jpg
│   ├── background3.jpg
│   └── background4.jpg
└── .github/
    └── workflows/     # GitHub Actions 配置
        └── deploy.yml
```

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

## 本地开发

1. 克隆仓库：
   ```bash
   git clone https://github.com/zzrcmd/grade7-navigation-station.git
   ```

2. 直接在浏览器中打开 `index.html` 文件即可预览

3. 修改背景图片：
   - 将图片文件放入 `images` 文件夹
   - 图片命名格式为 `background{n}.jpg`
   - 在 `index.html` 中更新图片路径数组

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 许可证

MIT License 