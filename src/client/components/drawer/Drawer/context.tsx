/*
 * @Author: dyb-dev
 * @Date: 2025-09-12 19:41:02
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 20:28:55
 * @FilePath: /next-ssr-web-template/src/client/components/drawer/Drawer/context.tsx
 * @Description: 抽屉上下文
 */

import { createContext, useContext } from "react"

import type { TLoadStatus } from "@/client/hooks"
import type { IBaseResult, IDefaultResult } from "@/client/utils/component"

/** 抽屉上下文 */
export interface IContext<Result extends IBaseResult = IDefaultResult> {
    /** 加载状态 */
    loadStatus: TLoadStatus
    /** 结果对象 */
    result: Result
    /**
     * 关闭抽屉
     *
     * @param {Result} [result] 结果对象 默认: { actionType: "close" }
     */
    close: (result?: Result) => void
}

/** CONST: 抽屉上下文 */
const Context = createContext<IContext | null>(null)

/** CONST: 抽屉上下文提供者 */
export const Provider = Context.Provider

/**
 * HOOKS: 使用抽屉上下文
 *
 * @author dyb-dev
 * @date 2025-09-11 20:05:39
 * @returns {*}  {IContext} 抽屉上下文
 */
export const useDrawer = <Result extends IBaseResult = IDefaultResult>(): IContext<Result> => {

    /** HOOKS: 使用上下文 */
    const context = useContext(Context) as unknown as IContext<Result>

    if (!context) {

        throw new Error("useDrawer 必须在 Provider 内部使用")

    }

    return context

}
