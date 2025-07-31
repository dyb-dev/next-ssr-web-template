/*
 * @Author: dyb-dev
 * @Date: 2025-07-18 20:18:51
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-28 15:34:57
 * @FilePath: /next-ssr-web-template/src/common/utils/env/index.ts
 * @Description: 环境相关工具函数
 */

/**
 * FUN: 是否为开发环境
 *
 * @author dyb-dev
 * @date 09/10/2024/  17:34:47
 * @returns {*}  {boolean} 是否为开发环境
 */
export const isDevEnv = (): boolean => process.env.NODE_ENV === "development"

/**
 * FUN: 是否为客户端环境
 *
 * @author dyb-dev
 * @date 2025-07-21 21:41:48
 * @returns {*}  {boolean} 是否为客户端环境
 */
export const isClientEnv = (): boolean => typeof window !== "undefined" && typeof document !== "undefined"
