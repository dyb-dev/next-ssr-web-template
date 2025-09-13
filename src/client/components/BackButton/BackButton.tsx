/*
 * @Author: dyb-dev
 * @Date: 2025-07-30 10:56:24
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 20:22:32
 * @FilePath: /next-ssr-web-template/src/client/components/BackButton/BackButton.tsx
 * @Description: 返回按钮组件
 */

import { ArrowLeftOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { memo } from "react"

import { useNavigate } from "@/client/hooks"

import type { ButtonProps } from "antd"

/** 返回按钮组件 Props */
export interface IBackButtonProps extends ButtonProps {}

/** 返回按钮组件 */
export const BackButton = memo(function BackButton (props: Readonly<IBackButtonProps>) {

    const _props: IBackButtonProps = {
        icon: <ArrowLeftOutlined />,
        children: "返回",
        ...props
    }

    /** HOOKS: 使用路由导航 */
    const { back } = useNavigate()

    return <Button {..._props} onClick={back} />

})
