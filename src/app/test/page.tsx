/*
 * @Author: v_yanbgding
 * @Date: 2025-07-18 22:33:54
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-30 11:02:28
 * @FilePath: /next-ssr-web-template/src/app/test/page.tsx
 * @Description: 测试页
 */

import { memo } from "react"

import { BackButton } from "@/client/components"
import { NextLogo } from "@/server/components"

import "./page.scss"

export default memo(function Test () {

    return (
        <section className="test">
            <div className="test__main">
                <NextLogo />
                <h1 className="test__main__title">Next-SSR-Web-Template</h1>
                <p className="test__main__desc">本页面展示模板的核心组件与交互模式，可用于开发测试和功能验证。</p>

                <div className="test__main__actions">
                    <BackButton />
                </div>
            </div>
        </section>
    )

})
