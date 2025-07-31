/*
 * @Author: dyb-dev
 * @Date: 2025-07-28 01:22:27
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 22:04:08
 * @FilePath: /next-ssr-web-template/src/client/components/Navigate/Navigate.tsx
 * @Description: 导航组件
 */

"use client"

import { memo, useEffect } from "react"

import { useNavigate } from "@/client/hooks"

import type { INavigateOptions } from "@/client/hooks"

/** 导航组件 Props */
export interface INavigateProps extends INavigateOptions {
    /**
     * 是否替换当前历史记录
     *
     * @default false
     */
    replace?: boolean
}

/** 导航组件 */
export const Navigate = memo(function Navigate ({ replace = false, ...rest }: Readonly<INavigateProps>) {

    /** HOOKS: 使用路由导航 */
    const { push: _push, replace: _replace } = useNavigate()

    useEffect(() => {

        const _navigateFn = replace ? _replace : _push

        _navigateFn(rest)

    }, [replace, rest, _replace, _push])

    return null

})
