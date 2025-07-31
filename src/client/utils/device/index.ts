/*
 * @Author: dyb-dev
 * @Date: 2025-07-21 20:18:36
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 22:06:44
 * @FilePath: /next-ssr-web-template/src/client/utils/device/index.ts
 * @Description: 设备相关工具函数
 */

/**
 * FUN: 是否是微信环境
 *
 * @author dyb-dev
 * @date 15/10/2024/  14:20:35
 * @returns {*}  {boolean} 是否是微信环境
 */
export const isWx = (): boolean => /micromessenger/.test(navigator.userAgent.toLowerCase())

/**
 * FUN: 判断是否是IOS设备
 *
 * @author dyb-dev
 * @date 15/10/2024/  14:20:51
 * @returns {*}  {boolean} 是否是IOS设备
 */
export const isIos = (): boolean => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

/**
 * FUN: 判断是否是Android设备
 *
 * @author dyb-dev
 * @date 15/10/2024/  14:22:30
 * @returns {*}  {boolean} 是否是Android设备
 */
export const isAndroid = (): boolean => /Android/.test(navigator.userAgent)
