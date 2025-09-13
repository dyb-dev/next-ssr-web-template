/*
 * @Author: dyb-dev
 * @Date: 2025-09-12 21:49:29
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 19:24:23
 * @FilePath: /next-ssr-web-template/src/client/components/drawer/DemoDrawer/index.tsx
 * @Description: Demo 抽屉
 */

import { showDrawer } from "@/client/components"

import { Children } from "./Children/Children"

import type { IChildrenProps } from "./Children/Children"
import type { TShowDrawerOptions } from "@/client/components"
import type { TDefaultActionType, TExcludeChildren } from "@/client/utils/component"

/** 显示 `Demo 抽屉` 选项 */
export interface IShowDemoDrawerOptions extends TExcludeChildren<TShowDrawerOptions<IShowDemoDrawerResult>> {
    /** 子组件 Props */
    children: IChildrenProps
}

/** 显示 `Demo 抽屉` 结果对象 */
export interface IShowDemoDrawerResult {
    /** 动作类型 */
    actionType: TDefaultActionType | "cancel" | "confirm"
    /** 数据 */
    data: string
}

/**
 * FUN: 显示 `Demo 抽屉`
 *
 * @author dyb-dev
 * @date 2025-09-12 18:09:27
 * @param {IShowDemoDrawerOptions} options 选项
 * @returns {*}  {Promise<IShowDemoDrawerResult>} 结果对象
 */
export const showDemoDrawer = (options: IShowDemoDrawerOptions): Promise<IShowDemoDrawerResult> => {

    const { children, ...drawerOptions } = options

    return showDrawer<IShowDemoDrawerResult>({
        ...drawerOptions,
        children: <Children {...children} />
    })

}
