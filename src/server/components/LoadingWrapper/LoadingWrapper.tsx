/*
 * @FileDesc: 加载中包装组件
 */

import { Spin } from "antd"
import classNames from "classnames"
import { memo } from "react"

import type { SpinProps } from "antd"
import type { ReactNode } from "react"

import "./LoadingWrapper.scss"

/** 加载中状态包装器 Props */
export interface ILoadingWrapperProps extends Omit<SpinProps, "children"> {
    /**
     * 是否显示内容
     *
     * @default false
     */
    showContent?: boolean
    /**
     * 加载图标大小
     *
     * @default 'large'
     */
    size?: SpinProps["size"]
    /**
     * 子元素
     * - 支持 ReactNode 或返回 ReactNode 的函数
     */
    children?: ReactNode | (() => ReactNode)
}

/** 加载中状态包装器 */
export const LoadingWrapper = memo(function LoadingWrapper (props: ILoadingWrapperProps) {

    const { showContent = false, children, className, size = "large", ...spinProps } = props

    // 如果不显示内容，渲染加载状态
    if (!showContent) {

        return (
            <div className={classNames("loading-wrapper", className)}>
                <Spin {...spinProps} size={size} />
            </div>
        )

    }

    return typeof children === "function" ? children() : children

})
