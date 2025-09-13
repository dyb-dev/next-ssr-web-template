/*
 * @Author: dyb-dev
 * @Date: 2025-09-12 19:41:02
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 19:32:00
 * @FilePath: /next-ssr-web-template/src/client/components/drawer/Drawer/Drawer.tsx
 * @Description: 抽屉
 */

import { Drawer as AntdDrawer } from "antd"
import { memo, useCallback, useMemo } from "react"
import { useImmer } from "use-immer"

import { useAsyncTask } from "@/client/hooks"

import { Provider } from "./context"

import type { IContext } from "./context"
import type { IBaseResult, IDefaultProps, IDefaultResult } from "@/client/utils/component"
import type { DrawerProps } from "antd"

/** 抽屉 Props */
export interface IDrawerProps<Result extends IBaseResult = IDefaultResult>
    extends IDefaultProps<Result>,
        Omit<DrawerProps, keyof IDefaultProps<Result> | "afterOpenChange"> {
    /** 打开抽屉且动画结束后触发 */
    onOpened?: () => void | Promise<void>
}

/** 抽屉 */
export const Drawer = memo(function Drawer (props: IDrawerProps) {

    const { onClose, onClosed, onOpened, ...drawerProps } = props

    /** STATE: 结果对象 */
    const [result, setResult] = useImmer<IDefaultResult>({
        actionType: "close"
    })

    /** HOOKS: 使用异步任务执行器 */
    const { loadStatus, run } = useAsyncTask()

    /** FUN: 关闭 */
    const close = useCallback(
        (newResult: IDefaultResult = { actionType: "close" }) => {

            // 如果正在加载中，则不允许关闭
            if (loadStatus === "loading") {

                console.warn("正在执行中，无法关闭")
                return

            }

            run(async () => {

                setResult(newResult)
                await onClose?.(newResult)

            }, "操作失败")

        },
        [loadStatus, onClose, run, setResult]
    )

    /** MEMO: 传递给子孙组件的上下文值 */
    const contextValue = useMemo<IContext<IDefaultResult>>(
        () => ({
            loadStatus,
            result,
            close
        }),
        [loadStatus, result, close]
    )

    return (
        <Provider value={contextValue}>
            <AntdDrawer
                {...drawerProps}
                onClose={() => close()}
                afterOpenChange={open => {

                    // 当抽屉打开且动画结束时
                    if (open) {

                        onOpened?.()

                    }
                    else {

                        onClosed?.(result)

                    }

                }}
            />
        </Provider>
    )

})
