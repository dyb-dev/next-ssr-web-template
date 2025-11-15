/*
 * @FileDesc: 抽屉
 */

/** 导出 `抽屉` */
export * from "./Drawer"

/** 导出 `抽屉` 上下文 */
export * from "./context"

import { mountComponent } from "@/client/utils/component"

import { Drawer } from "./Drawer"

import type { IDrawerProps } from "./Drawer"
import type { IBaseResult, IDefaultResult, TExcludeVisible, TOnCloseReturnsBoolean } from "@/client/utils/component"

/** 显示 `抽屉` 选项 */
export type TShowDrawerOptions<Result extends IBaseResult = IDefaultResult> = TExcludeVisible<
    TOnCloseReturnsBoolean<IDrawerProps<Result>>
>

/**
 * FUN: 显示 `抽屉`
 *
 * @author dyb-dev
 * @date 2025-09-12 17:59:36
 * @template Result
 * @param {TShowDrawerOptions<Result>} options 选项
 * @returns {*}  {Promise<Result>} 结果对象
 */
export const showDrawer = <Result extends IBaseResult = IDefaultResult>(options: TShowDrawerOptions<Result>): Promise<Result> => {

    return mountComponent<Result, TShowDrawerOptions<Result>>(Drawer, {
        ...options
    })

}
