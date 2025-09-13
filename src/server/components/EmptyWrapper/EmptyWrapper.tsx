/*
 * @Author: dyb-dev
 * @Date: 2025-09-13 01:01:23
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 19:48:05
 * @FilePath: /next-ssr-web-template/src/server/components/EmptyWrapper/EmptyWrapper.tsx
 * @Description: 空状态包装组件
 */

import { Empty } from "antd"
import classNames from "classnames"
import { memo } from "react"

import type { EmptyProps } from "antd"
import type { ReactNode } from "react"

import "./EmptyWrapper.scss"

/** 空状态包装器 Props */
export interface IEmptyWrapperProps extends Omit<EmptyProps, "children"> {
    /**
     * 是否显示内容
     *
     * @default false
     */
    showContent?: boolean
    /**
     * 子元素
     * - 支持 ReactNode 或返回 ReactNode 的函数
     */
    children?: ReactNode | (() => ReactNode)
}

/** 空状态包装器 */
export const EmptyWrapper = memo(function EmptyWrapper (props: IEmptyWrapperProps) {

    const { showContent = false, children, className, image = Empty.PRESENTED_IMAGE_SIMPLE, ...emptyProps } = props

    // 如果不显示内容，渲染空状态
    if (!showContent) {

        return <Empty {...emptyProps} className={classNames("empty-wrapper", className)} image={image} />

    }

    return typeof children === "function" ? children() : children

})
