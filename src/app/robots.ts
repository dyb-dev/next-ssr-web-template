/*
 * @Author: v_yanbgding
 * @Date: 2025-07-05 21:18:36
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-30 12:02:12
 * @FilePath: /next-ssr-web-template/src/app/robots.ts
 * @Description: 控制搜索引擎爬虫对网站的访问权限配置
 */

import type { MetadataRoute } from "next"

/** CONST: 环境变量 */
const { NEXT_PUBLIC_PROXY_DOMAIN, NEXT_PUBLIC_BASE_PATH } = process.env

export default (): MetadataRoute.Robots => {

    return {
        // 配置 sitemap.xml 地址
        sitemap: `${NEXT_PUBLIC_PROXY_DOMAIN}${NEXT_PUBLIC_BASE_PATH}/sitemap.xml`,
        // 配置爬虫规则
        rules: [
            {
                // 适用于所有爬虫
                userAgent: "*",
                // 允许爬虫访问整个站点
                allow: "/"
            }
        ]
    }

}
