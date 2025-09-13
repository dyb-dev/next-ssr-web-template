/*
 * @Author: dyb-dev
 * @Date: 2025-09-12 21:49:20
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 19:22:45
 * @FilePath: /next-ssr-web-template/src/client/components/drawer/DemoDrawer/Children/Children.tsx
 * @Description: 子组件
 */

import { Button } from "antd"
import { memo } from "react"

import { useDrawer } from "@/client/components"

import type { IShowDemoDrawerResult } from ".."

import "./Children.scss"

/** 子组件 Props */
export interface IChildrenProps {
    /** 描述 */
    desc: string
}

export const Children = memo(function Children (props: IChildrenProps) {

    const { desc } = props

    /** HOOKS: 使用抽屉上下文 */
    const { loadStatus, close, result } = useDrawer<IShowDemoDrawerResult>()

    return (
        <div className="demo-drawer__children">
            <div className="demo-drawer__children__desc">{desc}</div>
            <div className="demo-drawer__children__buttons">
                <Button
                    type="default"
                    size="middle"
                    loading={loadStatus === "loading" && result.actionType === "cancel"}
                    onClick={() => {

                        close({ actionType: "cancel", data: "点击取消按钮" })

                    }}
                >
                    取消
                </Button>
                <Button
                    type="primary"
                    size="middle"
                    loading={loadStatus === "loading" && result.actionType === "confirm"}
                    onClick={() => {

                        close({ actionType: "confirm", data: "点击确认按钮" })

                    }}
                >
                    确认
                </Button>
            </div>
        </div>
    )

})
