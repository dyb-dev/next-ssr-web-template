/*
 * @FileDesc: 子组件
 */

import { Button } from "antd"
import { memo } from "react"

import { useDrawerContext } from "@/client/components"

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
    const { loadStatus, close, result } = useDrawerContext<IShowDemoDrawerResult>()

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
