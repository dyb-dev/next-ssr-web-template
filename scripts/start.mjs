/*
 * @Author: v_yanbgding
 * @Date: 2025-07-29 20:35:52
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-29 22:41:31
 * @FilePath: /next-ssr-web-template/scripts/start.mjs
 * @Description: 启动 Next.js 生产服务入口
 */

import { execSync } from "child_process"

import NextEnv from "@next/env"

/** CONST: 加载环境变量函数 */
const { loadEnvConfig } = NextEnv

/** CONST: 工作目录 */
const projectDir = process.cwd()

/** CONST: 当前环境变量 */
const { parsedEnv } = loadEnvConfig(projectDir, false)

const { OUT_DIR, PORT, DEBUG } = parsedEnv

/** CONST: 构建命令参数 */
const commandParts = [
    DEBUG === "true" ? "cross-env NODE_OPTIONS='--inspect'" : "",
    `node ./${OUT_DIR}/standalone/server.js`,
    `--port ${PORT}`
]

/** CONST: 过滤空参数并拼接成完整命令 */
const command = commandParts.filter(Boolean).join(" ")

console.log(`🚀 启动命令: ${command}\n`)

try {

    // 执行命令
    execSync(command, {
        // 继承父进程的输入/输出
        stdio: "inherit"
    })

}
catch (error) {

    console.error("\n❌ 启动失败:", error)
    process.exit(1)

}
