/*
 * @FileDesc: url相关工具函数
 */

import queryString from "query-string"

import { getBaseUrl, getUrlQuery, getUrlQueryValue, mergeUrlQuery, setUrlQueryValue } from "@/common/utils"

/**
 * FUN: 获取当前 URL 网址
 *
 * @author dyb-dev
 * @date 14/06/2023/  00:57:34
 * @returns {string} 当前地址, 默认返回值:> http://localhost/
 */
export const getCurrentUrl = (): string => location?.href || "http://localhost/"

/**
 * FUN: 获取当前 URL 网址的协议、域名、端口号组成的字符串
 *
 * @author dyb-dev
 * @date 15/10/2024/  12:32:42
 * @returns {*}  {string} - 当前地址的协议、域名、端口号组成的字符串
 */
export const getCurrentUrlOrigin = (): string => location?.origin || "http://localhost/"

/**
 * FUN: 获取当前基础 URL（去除查询参数）
 *
 * @author dyb-dev
 * @date 15/10/2024/  10:46:33
 * @returns {*}  {string} - 当前基础 URL
 */
export const getCurrentBaseUrl = (): string => getBaseUrl(getCurrentUrl())

/**
 * FUN: 获取当前 url 的 查询参数对象
 *
 * @author dyb-dev
 * @date 15/10/2024/  10:47:22
 * @returns {*}  {queryString.ParsedQuery<string>} - 当前 url 的查询参数对象
 */
export const getCurrentUrlQuery = (): queryString.ParsedQuery<string> => getUrlQuery(getCurrentUrl())

/**
 * FUN: 获取当前 url 的 查询参数对象 中的指定参数值
 *
 * @author dyb-dev
 * @date 15/10/2024/  10:49:53
 * @param {string} key query 的 key
 * @returns {*}  {string} - query 的 value
 */
export const getCurrentUrlQueryValue = (key: string): string => getUrlQueryValue(getCurrentUrl(), key)

/**
 * FUN: 设置或更新 当前 url 的 查询参数对象 中的指定参数，并返回更新后的 URL 字符串
 *
 * @author dyb-dev
 * @date 15/10/2024/  10:53:57
 * @param {string} key query 的 key
 * @param {string} value query 的 value
 * @param {queryString.StringifyOptions} [options] stringifyUrl 的 options
 * @returns {*}  {string} - 更新后的 URL 字符串
 */
export const setCurrentUrlQueryValue = (key: string, value: string, options?: queryString.StringifyOptions): string =>
    setUrlQueryValue(getCurrentUrl(), key, value, options)

/**
 * FUN: 合并当前 URL 的查询参数，并返回更新后的 URL 字符串
 *
 * @author dyb-dev
 * @date 15/10/2024/  10:57:18
 * @param {queryString.ParsedQuery<string>} obj 需要合并到 URL 中的查询参数对象
 * @param {queryString.StringifyOptions} [options] stringifyUrl 的 options
 * @returns {*}  {string} - 更新后的 URL 字符串
 */
export const mergeCurrentUrlQuery = (obj: queryString.ParsedQuery<string>, options?: queryString.StringifyOptions): string =>
    mergeUrlQuery(getCurrentUrl(), obj, options)
