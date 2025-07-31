/*
 * @Author: dyb-dev
 * @Date: 2025-07-27 20:49:08
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-29 10:43:32
 * @FilePath: /next-ssr-web-template/src/client/router/index.tsx
 * @Description: 初始化路由组件
 */

"use client"

import { memo } from "react"

import { LoginGuard } from "./guard"

import type { ReactNode } from "react"

/** 初始化路由组件 Props */
interface ISetupRouterProps {
    /** 子节点 */
    children: ReactNode
}

/** 初始化路由组件 */
export const SetupRouter = memo(function SetupRouter ({ children }: Readonly<ISetupRouterProps>) {

    return <LoginGuard>{children}</LoginGuard>

})
