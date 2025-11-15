/*
 * @FileDesc: 抽屉上下文
 */

import { createContext, useContext } from "react"

import type { IBaseResult, IDefaultContext, IDefaultResult } from "@/client/utils/component"

/** CONST: 抽屉上下文 */
const Context = createContext<IDefaultContext | null>(null)

/** CONST: 抽屉上下文提供者 */
export const DrawerProvider = Context.Provider

/**
 * HOOKS: 使用抽屉上下文
 *
 * @author dyb-dev
 * @date 2025-09-11 20:05:39
 * @returns {*}  {IContext} 抽屉上下文
 */
export const useDrawerContext = <Result extends IBaseResult = IDefaultResult>(): IDefaultContext<Result> => {

    /** HOOKS: 使用上下文 */
    const context = useContext(Context) as unknown as IDefaultContext<Result>

    if (!context) {

        throw new Error("useDrawerContext 必须在 Provider 内部使用")

    }

    return context

}
