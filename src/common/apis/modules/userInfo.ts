/*
 * @Author: v_yanbgding
 * @Date: 2025-07-18 20:09:55
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-30 22:09:29
 * @FilePath: /next-ssr-web-template/src/common/apis/modules/userInfo.ts
 * @Description: 用户信息相关接口
 */

import { sendRequest } from "../request"

import type { AxiosResponse } from "axios"

/** 登录 参数 */
export interface ILoginApiParams {
    /** 用户手机号 */
    phoneNumber: string
    /** 用户密码 */
    password: string
}

/** 登录 结果数据 */
export interface ILoginApiResultData {
    /** 昵称 */
    nickName: string
    /** 绑定手机号 */
    phoneNumber: string
}

/** CONST: 登录 API URL TODO: 接口地址修改 */
export const LOGIN_API_URL = ""

/**
 * FUN: 登录
 *
 * @author dyb-dev
 * @date 21/02/2025/  14:08:17
 * @param {ILoginApiParams} params 参数
 * @param {TModifyProperties<ITestRequestConfig<ILoginApiResultData>, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof LOGIN_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse<ILoginApiResultData>>} 结果数据
 */
export const loginApi = (
    params: ILoginApiParams,
    testRequestConfig?: TModifyProperties<ITestRequestConfig<ILoginApiResultData>, "test">,
    url: typeof LOGIN_API_URL = LOGIN_API_URL
): Promise<AxiosResponse<ILoginApiResultData>> => {

    return sendRequest({
        url,
        params,
        testRequestConfig
    })

}

/** CONST: 检查登录URL TODO: 接口地址修改 */
export const CHECK_LOGIN_API_URL = "/checkLogin"

/**
 * FUN: 检查登录状态
 *
 * @author dyb-dev
 * @date 21/02/2025/  14:08:51
 * @param {TModifyProperties<ITestRequestConfig, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof CHECK_LOGIN_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse>} 结果数据
 */
export const checkLoginApi = (
    testRequestConfig?: TModifyProperties<ITestRequestConfig, "test">,
    url: typeof CHECK_LOGIN_API_URL = CHECK_LOGIN_API_URL
): Promise<AxiosResponse> => {

    return sendRequest({
        url,
        testRequestConfig
    })

}

/** CONST: 登出URL TODO: 接口地址修改 */
export const LOGOUT_API_URL = "/logout"

/**
 * FUN: 登出
 *
 * @author dyb-dev
 * @date 21/02/2025/  14:09:06
 * @param {TModifyProperties<ITestRequestConfig, "test">} [testRequestConfig] 测试请求配置
 * @param {typeof LOGOUT_API_URL} [url] 路径
 * @returns {*}  {Promise<AxiosResponse>} 结果数据
 */
export const logoutApi = (
    testRequestConfig?: TModifyProperties<ITestRequestConfig, "test">,
    url: typeof LOGOUT_API_URL = LOGOUT_API_URL
): Promise<AxiosResponse> => {

    return sendRequest({
        url,
        testRequestConfig
    })

}
