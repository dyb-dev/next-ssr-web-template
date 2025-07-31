/*
 * @Author: dyb-dev
 * @Date: 2025-07-28 14:41:54
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-29 10:44:42
 * @FilePath: /next-ssr-web-template/src/server/setup/index.tsx
 * @Description: 初始化服务端组件
 */

import { memo } from "react"

import { setupApi } from "./api"

import type { ReactNode } from "react"

/** 初始化服务端组件 Props */
interface ISetupServerProps {
    /** 子节点 */
    children: ReactNode
}

/** 初始化服务端组件 */
export const SetupServer = memo(function SetupServer ({ children }: Readonly<ISetupServerProps>) {

    /** FUN: 初始化接口配置 */
    setupApi()

    return children

})
