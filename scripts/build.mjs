/*
 * @Author: dyb-dev
 * @Date: 2025-07-29 20:35:44
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 22:21:26
 * @FilePath: /next-ssr-web-template/scripts/build.mjs
 * @Description: 启动 Next.js 构建产物入口
 */

import { execSync } from "child_process"
import path from "path"

import NextEnv from "@next/env"
import fs from "fs-extra"

/** CONST: 加载环境变量函数 */
const { loadEnvConfig } = NextEnv

/** CONST: 工作目录 */
const projectDir = process.cwd()

/** CONST: 当前环境变量 */
const { parsedEnv } = loadEnvConfig(projectDir, false)

const { OUT_DIR } = parsedEnv

/** CONST: 完整命令 */
const command = "next build"

console.log(`🚀 启动命令: ${command}\n`)

try {

    // 1. 执行构建命令
    execSync(command, {
        // 继承父进程的输入/输出
        stdio: "inherit"
    })

    console.log("✅ 构建完成，开始复制文件...\n")

    // 2. 复制 public 到 OUT_DIR/standalone/public
    const publicSrc = path.join(projectDir, "public")
    const publicDest = path.join(projectDir, OUT_DIR, "standalone", "public")

    fs.copySync(publicSrc, publicDest)
    console.log(`📁 复制 public → ${OUT_DIR}/standalone/public`)

    // 3. 复制 static 到 OUT_DIR/standalone/OUT_DIR/static
    const staticSrc = path.join(projectDir, OUT_DIR, "static")
    const staticDest = path.join(projectDir, OUT_DIR, "standalone", OUT_DIR, "static")

    fs.copySync(staticSrc, staticDest)
    console.log(`📁 复制 ${OUT_DIR}/static → ${OUT_DIR}/standalone/${OUT_DIR}/static`)

    console.log("\n🎉 所有操作完成！\n")

}
catch (error) {

    console.error("\n❌ 启动失败:", error)
    process.exit(1)

}
