/*
 * @Author: dyb-dev
 * @Date: 2025-07-21 19:49:29
 * @LastEditors: dyb-dev
 * @LastEditTime: 2025-07-26 21:01:55
 * @FilePath: /next-ssr-web-template/src/client/stores/theme.ts
 * @Description: 主题状态管理
 */

// import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { createWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/vanilla/shallow"

/** 主题枚举 */
export const enum ETheme {
    /** 浅色主题 */
    Light = "light",
    /** 深色主题 */
    Dark = "dark"
}

/** Store 状态 */
export interface IThemeStoreState {
    /** 当前主题 */
    theme: ETheme
}

/** Store 动作 */
export interface IThemeStoreAction {
    /**
     * FUN: 更新主题
     *
     * @param theme - 目标主题
     */
    updateTheme: (theme: ETheme) => void
}

/** Store 实例 */
export const useThemeStore = createWithEqualityFn<IThemeStoreState & IThemeStoreAction>()(
    // 允许订阅指定状态中间件
    subscribeWithSelector(
        // 允许持久化储存中间件
        // persist(
        // 允许将不可变对象写法改为可变对象写法中间件
        immer(set => ({
            // #region CODE: 状态

            theme: ETheme.Light,

            // #endregion

            // #region CODE: 动作

            updateTheme: theme => {

                set(state => {

                    state.theme = theme

                })

            }

            // #endregion
        }))
        // {
        //     // 设置持久化储存的 key
        //     name: "ThemeStore",
        //     // 设置持久化储存的存储方式
        //     storage: createJSONStorage(() => localStorage),
        //     // 设置需要持久化的状态
        //     partialize: state => ({ nickName: state.nickName })
        // }
        // )
    ),
    shallow
)
