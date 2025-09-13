/*
 * @Author: dyb-dev
 * @Date: 2025-07-27 18:14:26
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-09-14 01:40:28
 * @FilePath: /next-ssr-web-template/src/app/login/page.tsx
 * @Description: 登录页
 */

import { memo } from "react"

import { Form } from "./components"
import styles from "./page.module.scss"

export default memo(function Login () {

    return (
        <section className={styles["login"]}>
            <div className={styles["login__main"]}>
                <h1 className={styles["login__main__title"]}>用户登录</h1>
                <p className={styles["login__main__desc"]}>请输入您的手机号和密码进行登录</p>

                <Form />
            </div>
        </section>
    )

})
