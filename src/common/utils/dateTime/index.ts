/*
 * @Author: v_yanbgding
 * @Date: 2025-07-18 20:18:51
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-30 22:12:22
 * @FilePath: /next-ssr-web-template/src/common/utils/dateTime/index.ts
 * @Description: 日期时间相关工具函数
 */

/**
 * FUN: 延迟函数
 *
 * @author dyb-dev
 * @date 19/02/2025/  15:55:58
 * @param {number} ms - 延迟时间（毫秒）
 * @returns {*}  {Promise<void>} - 返回一个 Promise 对象
 */
export const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))
