/*
 * @Author: dyb-dev
 * @Date: 2025-07-05 21:15:10
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 21:19:24
 * @FilePath: /next-ssr-web-template/src/app/sitemap.ts
 * @Description: 站点地图配置
 */

import type { MetadataRoute } from "next"

/** CONST: 环境变量 */
const { NEXT_PUBLIC_PROXY_DOMAIN, NEXT_PUBLIC_BASE_PATH } = process.env

export default (): MetadataRoute.Sitemap => {

    const pages: MetadataRoute.Sitemap = [
        {
            // 首页
            url: "/",
            // 优先级 0 ~ 1
            priority: 1.0,
            // 页面更新频率
            changeFrequency: "daily"
        },
        {
            // 登录页
            url: "/login",
            priority: 0.3,
            changeFrequency: "yearly"
        },
        {
            // 测试页
            url: "/test",
            priority: 0.1,
            changeFrequency: "monthly"
        }
    ]

    return pages.map(({ url, priority, changeFrequency }) => ({
        url: `${NEXT_PUBLIC_PROXY_DOMAIN}${NEXT_PUBLIC_BASE_PATH}${url}`,
        lastModified: new Date().toISOString(),
        priority,
        changeFrequency
    }))

}
