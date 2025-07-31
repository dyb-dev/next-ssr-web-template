/*
 * @Author: dyb-dev
 * @Date: 2025-07-18 15:58:19
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 11:11:38
 * @FilePath: /next-ssr-web-template/src/app/error.tsx
 * @Description: 全局错误页面
 */

"use client"

import { ReloadOutlined } from "@ant-design/icons"
import { Result, Button } from "antd"
import dayjs from "dayjs"
import { memo } from "react"

import { HomeButton } from "@/client/components"

import type { ResultProps } from "antd"

/** 错误实例 */
interface IError extends Error {
    /** 服务器错误标识（服务器错误时存在） */
    digest?: string
}

/** 全局错误页面 Props */
interface IErrorProps {
    /** 错误实例 */
    error: IError
    /** 重试方法 */
    reset: () => void
}

export default memo(function Error ({ error: { digest }, reset }: Readonly<IErrorProps>) {

    const resultProps: ResultProps = {
        status: "error",
        title: "页面出错了",
        subTitle: `很抱歉，页面出错了。时间：${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
        extra:
            <>
                <Button icon={<ReloadOutlined />} onClick={reset}>
                    请重试
                </Button>
                <HomeButton />
            </>

    }

    // 存在服务器错误标识时（服务器错误时存在）
    if (digest) {

        resultProps.subTitle = `${resultProps.subTitle} 错误ID: ${digest}`

    }

    return (
        <section className="error">
            <Result {...resultProps} />
        </section>
    )

})
