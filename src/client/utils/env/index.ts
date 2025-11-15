/*
 * @FileDesc: 环境相关工具函数
 */

import { getCurrentUrlQueryValue } from "@/client/utils"

/** LET: 是否已启用调试模式 */
let _debug: boolean = false

/**
 * FUN: 是否已启用调试模式
 *
 * @author dyb-dev
 * @date 23/05/2023/  13:58:40
 * @returns {boolean} 是否已启用调试模式
 */
export const isEnableDebug = (): boolean => {

    // 未启用调试模式时
    if (!_debug) {

        _debug = getCurrentUrlQueryValue("debug") === "1"

    }

    return _debug

}
