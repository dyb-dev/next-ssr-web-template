# Next-SSR-Web-Template

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)

## 项目简介

Next-SSR-Web-Template 是一个面向现代 Web 开发的高性能 SSR 应用模板，基于 [Next.js 15](https://nextjs.org/) + [React 19](https://zh-hans.react.dev/) + [TypeScript](https://www.typescriptlang.org/) 全栈技术栈构建。该模板预配置了一些常用的开发工具和插件，帮助你快速开发 SSR 应用，为您带来极致的体验。

## 功能特性

- **Next.js 15 全栈框架**：采用最新 App Router 架构，支持 SSR/SSG 混合渲染，集成 Turbopack，提升开发与构建效率。
- **React 19 支持**：全面兼容 React 19，支持其最新特性与开发模式。
- **TypeScript 深度集成**：全项目 TypeScript 开发，内置高级类型配置，严格类型检查。
- **Ant Design 组件库**：集成 <antd@5.x> 与 @ant-design/icons，支持 React 19、动态及自定义主题。
- **Sass 预处理**：采用 Dart Sass，支持模块化 SCSS，内置常用 mixin 和函数。
- **智能数据流**：结合 axios+SWR 实现高效数据请求，zustand 管理状态，use-immer 保证数据不可变。
- **实用工具集**：集成 dayjs、classnames、query-string 等常用工具库。
- **移动端调试**：内置 Eruda，支持移动端日志与网络监控。
- **代码质量保障**：配置 ESLint、Prettier、Stylelint，集成 husky 实现提交校验。
- **HTTPS 支持**：本地开发可启用 HTTPS，便于调试需安全协议的浏览器 API。

## 目录结构

```md
├── .husky/ # Git 钩子配置
├── .vscode/ # VSCode 配置
├── public/ # 公共静态资源
├── scripts/ # 脚本
├── src/ # 源代码
│ ├── app/ # Next.js App Router 页面与布局
│ ├── client/ # 客户端专用模块
│ ├── common/ # 公共专用模块
│ └── server/ # 服务端专用模块
├── .editorconfig # 统一编辑器配置
├── .env # 公共环境变量配置
├── .env.development # 开发环境变量配置
├── .env.production # 生产环境变量配置
├── .eslintrc.cjs # ESLint 配置
├── .eslintignore # ESLint 忽略配置
├── .gitignore # Git 忽略配置
├── .npmrc # npm 配置
├── .nvmrc # Node 版本管理配置
├── .prettierrc.mjs # Prettier 配置
├── .prettierignore # Prettier 忽略配置
├── .stylelintrc.mjs # Stylelint 配置
├── .stylelintignore # Stylelint 忽略配置
├── next.config.ts # Next.js 配置
├── package.json # 基础配置
├── LICENSE # 开源许可证
├── pnpm-lock.yaml # pnpm 依赖锁文件
├── README.md # 说明文档
└── tsconfig.json # TypeScript 配置
```

## 安装与使用

你可以使用 npm、pnpm 或 yarn 等包管理器来安装项目依赖。推荐使用 pnpm 作为首选包管理器。在下面的示例中，我们默认使用 pnpm 进行演示：

### 环境要求

- Node.js 版本 >= 22.0.0
- 如果包管理器为 pnpm，版本需 >= 9.9.0

### 环境变量配置

该模板项目支持通过 `.env` 文件进行环境变量配置，你可以根据实际需要修改 `.env` 中的配置项。

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

### 构建产物

```bash
pnpm build
```

### 预览产物

```bash
pnpm start
```

### 版本升级 & Git提交

```bash
pnpm release
```

## 许可证

本项目基于 `MIT 许可证` 开源。
