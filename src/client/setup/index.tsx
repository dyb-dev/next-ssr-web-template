/*
 * @Author: dyb-dev
 * @Date: 2025-07-28 14:31:20
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-11-01 10:46:09
 * @FilePath: /next-ssr-web-template/src/client/setup/index.tsx
 * @Description: 初始化客户端组件
 */

"use client"

// 使 antd 兼容 react19
import "@ant-design/v5-patch-for-react-19"
import { App, ConfigProvider, theme } from "antd"
// 使 antd 默认英文切换为简体中文
import zhCN from "antd/locale/zh_CN"
// 使 antd 内部 dayjs 默认英文切换为简体中文（注意: 必须在客户端组件导入）
import "dayjs/locale/zh-cn"
import { memo } from "react"

import { SetupRouter } from "@/client/router"
import { ETheme, useThemeStore } from "@/client/stores"
import { isClientEnv } from "@/common/utils"

import { setupApi } from "./api"
import { setupEruda } from "./eruda"
import { setupTheme } from "./theme"

import type { ReactNode } from "react"

/** 初始化客户端组件 Props */
interface ISetupClientProps {
    /** 子节点 */
    children: ReactNode
}

/** 初始化客户端组件 */
export const SetupClient = memo(function SetupClient ({ children }: Readonly<ISetupClientProps>) {

    // 为客户端环境时
    if (isClientEnv()) {

        /** FUN: 初始化 eruda 调试器 */
        setupEruda()

        /** FUN: 初始化接口配置 */
        setupApi()

        /** FUN: 初始化主题 */
        setupTheme()

    }

    /** HOOKS: 使用主题状态管理 */
    const { theme: currentTheme } = useThemeStore(({ theme }) => ({
        theme
    }))

    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                // 启用 css 变量模式，以便于项目依赖内置的 css 变量
                cssVar: {
                    // 禁用 css 变量前缀
                    prefix: "",
                    // 包含 css 变量的类名
                    key: "theme-vars"
                },
                // 可自定义 css 变量
                token: {},
                // 禁用 hash 模式，减小 css 体积
                hashed: false,
                // 启用内置主题算法
                algorithm: currentTheme === ETheme.Dark ? theme.darkAlgorithm : theme.defaultAlgorithm
            }}
        >
            <App className="app">
                <SetupRouter>{children}</SetupRouter>
            </App>
        </ConfigProvider>
    )

})
