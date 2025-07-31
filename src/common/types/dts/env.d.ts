/*
 * @Author: dyb-dev
 * @Date: 2025-07-18 20:54:53
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-29 21:59:48
 * @FilePath: /next-ssr-web-template/src/common/types/dts/env.d.ts
 * @Description: 环境变量 类型声明补充文件
 */

declare namespace NodeJS {
    interface ProcessEnv {
        // #region CODE: 客户端 & 服务端 环境变量

        /**
         * 基础路径
         * - 开发环境: 默认:空
         * - 生产环境: 默认:空 示例: /next-ssr-web-template
         */
        readonly NEXT_PUBLIC_BASE_PATH: string
        /** 登录页面的路由 默认:/login */
        readonly NEXT_PUBLIC_LOGIN_ROUTE: string
        /** 需要登录的路由集合，如果涉及多个,用逗号分隔 默认:空 */
        readonly NEXT_PUBLIC_NEED_LOGIN_ROUTES: string
        /** 首页路由 默认:/ */
        readonly NEXT_PUBLIC_HOME_ROUTE: string
        /** 本地服务器代理目标域 默认:http://xxx.com */
        readonly NEXT_PUBLIC_PROXY_DOMAIN: string
        /** 接口请求基础路径 默认:/api */
        readonly NEXT_PUBLIC_API_BASE_PATH: string
        /** 是否启用暗黑主题 默认:false */
        readonly NEXT_PUBLIC_DARK: string

        // #endregion

        // #region CODE: 服务端 环境变量

        /** 打包输出目录 */
        readonly OUT_DIR: string
        /** 端口号 默认:3000 */
        readonly PORT: string
        /** 是否启用 Node.js 调试程序 默认:false */
        readonly DEBUG: string

        // #endregion

        // #region CODE: 开发环境 服务端 环境变量

        /** 是否启用本地 https 服务 默认:false */
        readonly HTTPS: string

        // #endregion
    }
}
