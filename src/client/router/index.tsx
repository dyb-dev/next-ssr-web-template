/*
 * @FileDesc: 初始化路由组件
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
