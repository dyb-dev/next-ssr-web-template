/*
 * @Author: dyb-dev
 * @Date: 2025-07-16 18:05:26
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 19:51:56
 * @FilePath: /next-ssr-web-template/src/app/loading.tsx
 * @Description: 全局加载页面
 */

import { memo } from "react"

import { LoadingWrapper } from "@/server/components"

export default memo(function Loading () {

    return <LoadingWrapper />

})
