/*
 * @Author: matiastang
 * @Date: 2022-11-15 14:22:23
 * @LastEditors: matiastang
 * @LastEditTime: 2024-07-16 15:15:26
 * @FilePath: /vue-storage/src/vueStorage/index.ts
 * @Description: vue 响应式storage
 */
import { ref, reactive, watch } from 'vue'
import { localStorageRead, localStorageWrite, localStorageRemove } from 'matias-storage'

/**
 * 支持将值存储到localStorage中的ref
 * @param key
 * @param value
 * @param deep
 * @returns
 */
export const localRef = <T>(key: string, value?: T, deep?: boolean) => {
    const refValue = ref(value || localStorageRead<T>(key))

    watch(
        refValue,
        (newValue) => {
            if (newValue !== null && newValue !== undefined) {
                localStorageWrite(key, newValue)
            } else {
                localStorageRemove(key)
            }
        },
        {
            immediate: true,
            deep: deep === undefined || deep,
        }
    )

    return refValue
}

/**
 * 支持将值存储到localStorage中的reactive
 * @param key
 * @param value
 * @param deep
 * @returns
 */
export const localReactive = <T extends object>(key: string, value?: T, deep?: boolean) => {
    const reactiveValue = reactive<T>(value || localStorageRead<T>(key) || ({} as T))

    watch(
        reactiveValue,
        (newValue) => {
            if (Object.keys(newValue).length > 0) {
                localStorageWrite(key, newValue)
            } else {
                localStorageRemove(key)
            }
        },
        {
            immediate: true,
            deep: deep === undefined || deep,
        }
    )

    return reactiveValue
}
