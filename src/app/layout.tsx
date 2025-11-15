/*
 * @FileDesc: 根布局
 */

import { memo } from "react"

import { SetupClient } from "@/client/setup"
import { SetupServer } from "@/server/setup"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/common/styles/index.scss"

/** CONST: 元数据 */
export const metadata: Metadata = {
    title: "Next-SSR-Web-Template",
    description: "Next-SSR-Web-Template",
    keywords: ["Next-SSR-Web-Template"]
}

/** 根布局 Props */
interface ILayoutProps {
    /** 子节点 */
    children: ReactNode
}

export default memo(function Layout ({ children }: Readonly<ILayoutProps>) {

    return (
        <html>
            <body>
                <SetupClient>
                    <SetupServer>
                        {/* 可定义页头 */}
                        {children}
                        {/* 可定义页脚 */}
                    </SetupServer>
                </SetupClient>
            </body>
        </html>
    )

})
