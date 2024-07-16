<!--
 * @Author: matiastang
 * @Date: 2022-11-15 11:35:41
 * @LastEditors: matiastang
 * @LastEditTime: 2024-07-16 17:30:53
 * @FilePath: /vue-storage/README.md
 * @Description: README
-->
# matias-vue-storage

`vue` 的 `ref` 和 `reactive` 添加了本地持久化的能力。

## 使用

### 安装

* `pnpm`
```sh
$ pnpm add -D matias-vue-storage
```
* `yarn`
```sh
$ yarn add -D matias-vue-storage
```
* `npm`
```sh
$ npm install -D matias-vue-storage
```

### 使用

```ts
import { localRef, localReactive } from 'matias-vue-storage'

const router = useRouter()

interface TestType {
    random: number
}

const localKey = 'KEY'
let localObjectValue = localReactive<TestType>(localKey + '_OBJECT')

const changeObjectValue = () => {
    localObjectValue.random = Math.random() * 100
}

let localStringValue = localRef(localKey + '_STRING', Math.random() * 100 + '')

const changeStringValue = () => {
    localStringValue.value = `${Math.random() * 100}`
}
```

## 版本

### 0.1.0

* `localRef`支持`string`、`boolean`、`number`
* `localReactive`支持`object`