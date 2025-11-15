/*
 * @FileDesc: 首页按钮组件
 */

import { ArrowRightOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { usePathname } from "next/navigation"
import { memo } from "react"

import { useNavigate } from "@/client/hooks"

import type { ButtonProps } from "antd"

/** 首页按钮组件 Props */
export interface IHomeButtonProps extends ButtonProps {}

/** 首页按钮组件 */
export const HomeButton = memo(function HomeButton (props: Readonly<IHomeButtonProps>) {

    const _props: IHomeButtonProps = {
        icon: <ArrowRightOutlined />,
        children: "去首页",
        ...props
    }

    /** HOOKS: 使用路由导航 */
    const { replace } = useNavigate()

    /** HOOKS: 使用当前路由 */
    const currentRoute = usePathname()
    /** CONST: 首页路由 */
    const homeRoute = process.env.NEXT_PUBLIC_HOME_ROUTE
    /** CONST: 是否为首页路由 */
    const isHomeRoute = currentRoute === homeRoute

    if (isHomeRoute) {

        return null

    }

    return <Button {..._props} onClick={() => replace(homeRoute)} />

})
