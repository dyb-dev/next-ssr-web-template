/*
 * @Author: dyb-dev
 * @Date: 2025-07-16 17:13:54
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 11:21:30
 * @FilePath: /next-ssr-web-template/src/app/page.tsx
 * @Description: 首页
 */

import { ArrowRightOutlined, GithubOutlined } from "@ant-design/icons"
import { Button } from "antd"
import Link from "next/link"
import { memo } from "react"

import pkg from "@/../package.json"
import { NextLogo } from "@/server/components"

import "./page.scss"

export default memo(function Home () {

    return (
        <section className="home">
            <div className="home__main">
                <NextLogo />
                <h1 className="home__main__title">Next-SSR-Web-Template</h1>
                <p className="home__main__desc">一个基于 Next.js 的服务端渲染(SSR)模版，助力高效开发现代 Web 应用。</p>

                <div className="home__main__actions">
                    <Link href={pkg.repository.url}>
                        <Button icon={<GithubOutlined />}>Github</Button>
                    </Link>

                    <Link href="/test">
                        <Button icon={<ArrowRightOutlined />}>去探索</Button>
                    </Link>
                </div>
            </div>
        </section>
    )

})
