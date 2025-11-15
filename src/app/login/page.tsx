/*
 * @FileDesc: 登录页
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
