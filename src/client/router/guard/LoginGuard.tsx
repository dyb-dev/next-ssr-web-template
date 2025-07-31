/*
 * @Author: v_yanbgding
 * @Date: 2025-07-27 20:53:34
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-29 17:45:03
 * @FilePath: /next-ssr-web-template/src/client/router/guard/LoginGuard.tsx
 * @Description: 登录守卫组件
 */

"use client"

import { usePathname } from "next/navigation"
import { memo } from "react"

import { Navigate } from "@/client/components"
import { useUserInfoStore } from "@/client/stores"
import { getCurrentUrlQuery } from "@/client/utils"
import { LoadBox } from "@/server/components"

import type { ReactNode } from "react"

/** CONST: 需要登录的路由列表 */
const NEED_LOGIN_ROUTE_LIST = process.env.NEXT_PUBLIC_NEED_LOGIN_ROUTES.split(",")

/** 登录守卫组件 Props */
interface ILoginGuardProps {
    /** 子节点 */
    children: ReactNode
}

/** 登录守卫组件 */
export const LoginGuard = memo(function LoginGuard ({ children }: Readonly<ILoginGuardProps>) {

    /** HOOKS: 使用当前路由 */
    const currentRoute = usePathname()

    /** HOOKS: 获取用户登录状态 */
    const { isCheckedLogin, isLogin, checkLogin } = useUserInfoStore(({ isCheckedLogin, isLogin, checkLogin }) => ({
        isCheckedLogin,
        isLogin,
        checkLogin
    }))

    // 避免未完成登录检测时渲染
    if (!isCheckedLogin) {

        // 检测登录状态
        checkLogin()
        return <LoadBox />

    }

    // 如果当前路由为需要登录的路由且未登录
    if (NEED_LOGIN_ROUTE_LIST.includes(currentRoute) && !isLogin) {

        return (
            <Navigate
                path={process.env.NEXT_PUBLIC_LOGIN_ROUTE}
                query={{
                    ...getCurrentUrlQuery(),
                    redirectRoute: currentRoute
                }}
                replace
            />
        )

    }

    return children

})
