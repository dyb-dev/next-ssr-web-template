/*
 * @FileDesc: 全局404页面
 */

import { Result } from "antd"
import dayjs from "dayjs"
import { memo } from "react"

import { BackButton, HomeButton } from "@/client/components"

import type { ResultProps } from "antd"

export default memo(function NotFound () {

    const resultProps: ResultProps = {
        status: "error",
        title: "页面无法访问",
        subTitle: `很抱歉，页面无法访问。时间：${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
        extra:
            <>
                <BackButton>上一页</BackButton>
                <HomeButton />
            </>

    }

    return (
        <section className="not-found">
            <Result {...resultProps} />
        </section>
    )

})
