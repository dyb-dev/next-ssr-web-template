/*
 * @Author: v_yanbgding
 * @Date: 2025-07-16 18:05:26
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-29 10:35:10
 * @FilePath: /next-ssr-web-template/src/app/loading.tsx
 * @Description: 全局加载页面
 */

import { memo } from "react"

import { LoadBox } from "@/server/components"

export default memo(function Loading () {

    return <LoadBox />

})
