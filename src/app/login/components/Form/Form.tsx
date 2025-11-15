/*
 * @FileDesc: 表单
 */

import { ArrowRightOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form as AntdForm, Input } from "antd"
import { memo, useCallback } from "react"
import { useImmer } from "use-immer"

import { BackButton } from "@/client/components"
import { useAsyncTask, useNavigate } from "@/client/hooks"
import { useUserInfoStore } from "@/client/stores"
import { getCurrentUrlQuery } from "@/client/utils"
import { isPhoneNumber } from "@/common/utils"

import styles from "./Form.module.scss"

/** url 查询参数 */
interface ISearchParams {
    /**
     * 重定向路由
     *
     * @default process.env.NEXT_PUBLIC_HOME_ROUTE
     */
    redirectRoute?: string
    /** 其他相关参数 */
    [key: string]: any
}

/** 表单数据 */
interface IFormData {
    /** 手机号 */
    phoneNumber: string
    /** 密码 */
    password: string
}

export const Form = memo(function Form () {

    /** HOOKS: 使用表单数据 */
    const [formData, setFormData] = useImmer<IFormData>({
        phoneNumber: "",
        password: ""
    })

    /** HOOKS: 使用用户信息状态管理 */
    const login = useUserInfoStore(({ login }) => login)

    /** HOOKS: 使用路由导航 */
    const { replace } = useNavigate()

    /** HOOKS: 使用异步任务执行器 */
    const { loadStatus, run } = useAsyncTask()

    /** EVENT: 监听点击登录按钮 */
    const onClickLoginButton = useCallback(() => {

        run(async () => {

            // 登录
            const _loginResult = await login({
                phoneNumber: formData.phoneNumber,
                password: formData.password
            })

            // 如果登录失败
            if (!_loginResult.success) {

                throw Error(_loginResult.message || "登录失败, 请稍后重试")

            }

            // 获取当前路由参数
            const { redirectRoute = process.env.NEXT_PUBLIC_HOME_ROUTE, ...otherParams } = (getCurrentUrlQuery() ??
                {}) as ISearchParams

            replace({
                path: redirectRoute,
                query: otherParams
            })

        }, "登录失败, 请稍后重试")

    }, [formData, login, replace, run])

    return (
        <AntdForm className={styles["form"]} layout="vertical" initialValues={formData} onFinish={onClickLoginButton}>
            <AntdForm.Item
                label="手机号"
                name="phoneNumber"
                validateFirst
                rules={[
                    { required: true, message: "请输入手机号" },
                    { whitespace: true, message: "不能全是空格" },
                    { pattern: /^\d+$/, message: "只能输入数字" },
                    { len: 11, message: "手机号必须为11位" },
                    {
                        validator: (_, value) => isPhoneNumber(value) ? Promise.resolve() : Promise.reject("请输入正确的手机号")
                    }
                ]}
            >
                <Input
                    type="tel"
                    prefix={<UserOutlined />}
                    placeholder="请输入手机号"
                    maxLength={11}
                    allowClear
                    value={formData.phoneNumber}
                    onChange={e =>
                        setFormData(draft => {

                            draft.phoneNumber = e.target.value

                        })
                    }
                />
            </AntdForm.Item>

            <AntdForm.Item label="密码" name="password" validateFirst rules={[{ required: true, message: "请输入密码" }]}>
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="请输入密码"
                    value={formData.password}
                    onChange={e =>
                        setFormData(draft => {

                            draft.password = e.target.value

                        })
                    }
                />
            </AntdForm.Item>

            <div className={styles["form__actions"]}>
                <BackButton block />

                <Button type="primary" htmlType="submit" block loading={loadStatus === "loading"} icon={<ArrowRightOutlined />}>
                    登录
                </Button>
            </div>
        </AntdForm>
    )

})
