<!--
 * @Author: matiastang
 * @Date: 2022-11-17 11:28:42
 * @LastEditors: matiastang
 * @LastEditTime: 2024-07-16 15:44:00
 * @FilePath: /vue-storage/src/views/test.vue
 * @Description: vueStorage测试
-->
<template>
    <div class="page">
        <div @click="changeObjectValue">{{ `test objectValue：${localObjectValue.random}` }}</div>
        <div @click="changeStringValue">{{ `test stringValue：${localStringValue}` }}</div>
        <div @click="changeBooleanValue">{{ `test booleanValue：${localBooleanValue}` }}</div>
        <div @click="changeNumberValue">{{ `test numberValue：${localNumberValue}` }}</div>
        <div @click="changeSymbolValue">
            {{ `test symbolValue：${localSymbolValue?.toString()}` }}
        </div>
        <router-link to="/">跳转</router-link>
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
