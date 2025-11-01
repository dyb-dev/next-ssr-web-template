/*
 * @Author: dyb-dev
 * @Date: 2025-07-11 22:53:52
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-10-30 23:32:12
 * @FilePath: /next-ssr-web-template/next.config.ts
 * @Description: Next.js 配置文件
 */

import { isDevEnv } from "@/common/utils/env"

import type { NextConfig } from "next"
import type { Rewrite } from "next/dist/lib/load-custom-routes"

/** CONST: 环境变量 */
const { OUT_DIR, NEXT_PUBLIC_BASE_PATH, NEXT_PUBLIC_API_BASE_PATH, NEXT_PUBLIC_PROXY_DOMAIN } = process.env

export default {
    // 网站基础路径 默认: 空
    basePath: NEXT_PUBLIC_BASE_PATH,
    // 打包输出目录 默认: .next
    distDir: OUT_DIR,
    // 构建产物输出模式 默认: undefined
    // standalone: 独立部署模式，只包含生产环境所必需的产物，构建产物最小化
    output: "standalone",
    // 响应头是否包含 `X-Powered-By: Next.js` 标识 默认: true
    poweredByHeader: false,
    // 跨域资源请求策略，影响 <script>、<link> 等标签
    crossOrigin: "anonymous",
    // 静态资源 CDN 前缀配置
    // assetPrefix: "",
    // 生成构建 ID 容器部署时用到 (可使用 Git 提交哈希来确保多次构建生成相同的 ID)
    // generateBuildId: async () => "",
    // 开发环境时 允许跨域访问 Next.js 服务器 的白名单
    // allowedDevOrigins: [],
    // 实验性功能
    // experimental: {
    // 需要优化 Tree Shaking 的库，只打包按需引入的模块而非整个库，减少构建产物体积
    // optimizePackageImports: []
    // },
    // Eslint 配置
    eslint: {
        // 禁用 `next build` 时 Eslint 检查
        ignoreDuringBuilds: true
    },
    // Turbopack 配置
    turbopack: {
        // 路径别名
        resolveAlias: {
            "@": "./src"
        }
    },
    // SWC 编译器配置
    compiler: {
        // 移除 console 语句
        removeConsole: isDevEnv()
            ? false
            : {
                // 排除 error 和 warn 级别的 console 语句
                exclude: ["error", "warn"]
            }
    },
    // Scss 配置
    sassOptions: {
        // 指定 Scss 编译器的实现
        implementation: "sass-embedded",
        // Scss 全局引入
        additionalData: `
            @use "./src/common/styles/scss-var.scss" as *;
            @use "./src/common/styles/mixins/index.scss" as *;
            @use "./src/common/styles/funs/index.scss" as *;
        `
    },
    // 图片配置
    images: {
        // 是否允许加载 SVG 图像 默认: false
        dangerouslyAllowSVG: true,
        // 图片资源响应头中的 Content-Disposition 类型
        // attachment: 强制浏览器下载而非直接展示
        contentDispositionType: "attachment",
        // 图片资源的内容安全策略 (CSP)
        // default-src 'self': 只允许从当前域名加载
        // script-src 'none': 禁止所有脚本执行
        // sandbox: 启用沙箱模式限制潜在危险操作
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    },
    // 匹配顺序请查看 (https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites) 文档
    // 匹配 自定义响应头 配置
    // headers: async () => [],
    // 匹配 重定向 配置
    // redirects: async () => [],
    // 匹配 重写 配置
    rewrites: async () => {

        const _rewrites: Rewrite[] = []

        // 开发环境时 对 api 请求进行重写代理到后端
        // 生产环境时 不对 api 请求进行重写，以防止重写死循环且减少一次代理中转
        if (isDevEnv()) {

            /** api 源 */
            const API_SOURCE = `${NEXT_PUBLIC_API_BASE_PATH}/:path*`
            /** api 重写 */
            const API_REWRITE: Rewrite = {
                source: API_SOURCE,
                destination: `${NEXT_PUBLIC_PROXY_DOMAIN}${API_SOURCE}`
            }
            _rewrites.push(API_REWRITE)

        }

        return _rewrites

    }
} satisfies NextConfig
