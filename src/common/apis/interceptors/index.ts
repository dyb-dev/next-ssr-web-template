/*
 * @Author: dyb-dev
 * @Date: 2025-07-18 20:09:55
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-30 22:08:25
 * @FilePath: /next-ssr-web-template/src/common/apis/interceptors/index.ts
 * @Description: Api 拦截器模块
 */

import { setupResponseInterceptor } from "./response"

/**
 * FUN: 设置接口拦截器
 *
 * @author dyb-dev
 * @date 17/10/2024/  11:43:36
 */
export const setupApiInterceptor = () => {

    setupResponseInterceptor()

}
