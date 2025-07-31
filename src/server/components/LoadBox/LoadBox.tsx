/*
 * @Author: dyb-dev
 * @Date: 2025-07-27 23:39:49
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-29 10:44:14
 * @FilePath: /next-ssr-web-template/src/server/components/LoadBox/LoadBox.tsx
 * @Description: 加载盒子组件
 */

import { Spin } from "antd"
import { memo } from "react"

import "./LoadBox.scss"

/** 加载盒子组件 */
export const LoadBox = memo(function LoadBox () {

    return (
        <div className="load-box">
            <Spin size="large" />
        </div>
    )

})
