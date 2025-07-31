/*
 * @Author: dyb-dev
 * @Date: 2025-07-27 21:53:48
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 10:55:10
 * @FilePath: /next-ssr-web-template/src/client/hooks/navigate/index.ts
 * @Description: 导航相关hooks函数
 */

import { useRouter } from "next/navigation"
import { useCallback } from "react"

import { mergeUrlQuery } from "@/common/utils"

import type { AppRouterInstance, NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime"

/** 导航选项 */
export interface INavigateOptions extends NavigateOptions {
    /** 路由路径 */
    path: string
    /** 查询参数 */
    query?: Record<string, any>
}

/** 导航参数 */
export type TNavigateParams = INavigateOptions | string

/** 导航方法 */
export type TNavigate = (options: TNavigateParams) => void

/** 使用路由导航 返回值 */
export interface IUseNavigateReturn extends AppRouterInstance {
    /** 导航至目标路由 新增一条历史记录 */
    push: TNavigate
    /** 导航至目标路由 替换当前历史记录 */
    replace: TNavigate
}

/**
 * HOOKS: 使用路由导航
 *
 * @author dyb-dev
 * @date 2025-07-27 22:23:20
 * @returns {*} 使用路由导航返回值
 */
export const useNavigate = (): IUseNavigateReturn => {

    /** HOOKS: 使用路由导航 */
    const { push: _push, replace: _replace, ...restMethods } = useRouter()

    /**
     * FUN: 导航
     *
     * @author dyb-dev
     * @date 2025-07-27 22:21:56
     * @param {TNavigateParams} options 导航参数
     * @param {boolean} replace 是否替换当前历史记录
     */
    const _navigate = useCallback(
        (options: TNavigateParams, replace: boolean) => {

            /** 导航方法 */
            const _navigateFn = replace ? _replace : _push

            if (typeof options === "string") {

                _navigateFn(options)

            }
            else {

                const { path, query = {}, ...rest } = options
                _navigateFn(mergeUrlQuery(path, query), rest)

            }

        },
        [_push, _replace]
    )

    /**
     * FUN: 导航至目标路由 新增一条历史记录
     *
     * @author dyb-dev
     * @date 2025-07-27 22:22:27
     * @param {*} options 导航参数
     */
    const push: TNavigate = useCallback(
        options => {

            _navigate(options, false)

        },
        [_navigate]
    )

    /**
     * FUN: 导航至目标路由 替换当前历史记录
     *
     * @author dyb-dev
     * @date 2025-07-27 22:23:01
     * @param {*} options 导航参数
     */
    const replace: TNavigate = useCallback(
        options => {

            _navigate(options, true)

        },
        [_navigate]
    )

    return {
        ...restMethods,
        push,
        replace
    }

}
