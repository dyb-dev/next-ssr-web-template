/*
 * @Author: dyb-dev
 * @Date: 2025-07-21 20:16:33
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-11-01 10:42:52
 * @FilePath: /next-ssr-web-template/src/client/types/dts/index.d.ts
 * @Description: 全局类型声明补充文件
 */

import type { Eruda } from "eruda"

declare global {
    /** 扩展 Window 接口 */
    interface Window {
        MSStream?: any
        /** eruda 实例 */
        eruda: Eruda
    }
}
