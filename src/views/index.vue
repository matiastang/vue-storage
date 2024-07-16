<!--
 * @Author: matiastang
 * @Date: 2022-11-15 15:34:13
 * @LastEditors: matiastang
 * @LastEditTime: 2024-07-16 15:22:07
 * @FilePath: /vue-storage/src/views/index.vue
 * @Description: vue local storage 测试
-->
<template>
    <div class="page">
        <div @click="changeObjectValue">{{ `更新objectValue：${localObjectValue.random}` }}</div>
        <div @click="changTestValue">{{ `更新2objectValue：${localTestValue.random}` }}</div>
        <div @click="changeStringValue">{{ `更新stringValue：${localStringValue}` }}</div>
        <div @click="changeBooleanValue">{{ `更新booleanValue：${localBooleanValue}` }}</div>
        <div @click="changeNumberValue">{{ `更新numberValue：${localNumberValue}` }}</div>
        <div @click="changeSymbolValue">
            {{ `更新symbolValue：${localSymbolValue?.toString()}` }}
        </div>
        <div
            @click="
                () => {
                    router.push({
                        path: '/test',
                    })
                }
            "
        >
            跳转
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { localRef, localReactive } from '../vueStorage'

const router = useRouter()

interface TestType {
    random: number
}

const localKey = 'KEY'
let localObjectValue = localReactive<TestType>(localKey + '_OBJECT')

const changeObjectValue = () => {
    localObjectValue.random = Math.random() * 100
}

let localTestValue = localReactive<TestType>(localKey + '_OBJECT')

const changTestValue = () => {
    localTestValue.random = Math.random() * 100
}

let localStringValue = localRef<string>(localKey + '_STRING')

const changeStringValue = () => {
    localStringValue.value = `${Math.random() * 100}`
}

let localBooleanValue = localRef<boolean>(localKey + '_BOOLEAN')

const changeBooleanValue = () => {
    localBooleanValue.value = !localBooleanValue.value
}

let localNumberValue = localRef<number>(localKey + '_NUMBER')

const changeNumberValue = () => {
    localNumberValue.value = Math.random() * 100
}

let localSymbolValue = localRef<symbol>(localKey + '_SYMBOL')

const changeSymbolValue = () => {
    localSymbolValue.value = Symbol(Math.random() * 100)
}
</script>
<style lang="less" scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
}
</style>
