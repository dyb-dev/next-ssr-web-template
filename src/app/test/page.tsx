/*
 * @Author: dyb-dev
 * @Date: 2025-07-18 22:33:54
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-13 19:41:48
 * @FilePath: /next-ssr-web-template/src/app/test/page.tsx
 * @Description: 测试页
 */

import { memo } from "react"

import { BackButton } from "@/client/components"
import { NextLogo } from "@/server/components"

import styles from "./page.module.scss"

export default memo(function Test () {

    return (
        <section className={styles["test"]}>
            <div className={styles["test__main"]}>
                <NextLogo />
                <h1 className={styles["test__main__title"]}>Next-SSR-Web-Template</h1>
                <p className={styles["test__main__desc"]}>本页面展示模板的核心组件与交互模式，可用于开发测试和功能验证。</p>

                <div className={styles["test__main__actions"]}>
                    <BackButton />
                </div>
            </div>
        </section>
    )

})
