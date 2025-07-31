/*
 * @Author: v_yanbgding
 * @Date: 2025-07-21 19:49:29
 * @LastEditors: v_yanbgding
 * @LastEditTime: 2025-07-30 22:06:01
 * @FilePath: /next-ssr-web-template/src/client/stores/activity.ts
 * @Description: 当前活动状态管理
 */

// import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { createWithEqualityFn } from "zustand/traditional"
import { shallow } from "zustand/vanilla/shallow"

/** Store 状态 */
export interface IActivityStoreState {
    /** 数量 */
    count: number
}

/** Store 动作 */
export interface IActivityStoreAction {}

/** Store 实例 */
export const useActivityStore = createWithEqualityFn<IActivityStoreState & IActivityStoreAction>()(
    // 允许订阅指定状态中间件
    subscribeWithSelector(
        // 允许持久化储存中间件
        // persist(
        // 允许将不可变对象写法改为可变对象写法中间件
        immer(() => ({
            // #region CODE: 状态

            count: 0

            // #endregion

            // #region CODE: 动作

            // #endregion
        }))
        // {
        //     // 设置持久化储存的 key
        //     name: "ActivityStore",
        //     // 设置持久化储存的存储方式
        //     storage: createJSONStorage(() => localStorage),
        //     // 设置需要持久化的状态
        //     partialize: state => ({ nickName: state.nickName })
        // }
        // )
    ),
    shallow
)
