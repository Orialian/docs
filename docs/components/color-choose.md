---
title: color-choose
isCategories: true
---

# color-choose 颜色选择

## Properties 属性

| 属性名      | 说明             | 类型          | 默认值 |
| ----------- | ---------------- | ------------- | ------ |
| activeColor | 激活时的光环颜色 | `string`      | `#09f` |
| size        | 尺寸             | `string`      | `12px` |
| lists       | 颜色数组         | `Array<item>` | `[ ]`  |
| item        | 颜色数组项       | `object`      | -      |
| --color     | 背景颜色         | `string`      | -      |
| --selected  | 是否被选中       | `boolean`     | -      |
| -- ...      | item 属性项      | \*            | -      |

## Events

| 事件名   | 说明                         | 参数                    |
| -------- | ---------------------------- | ----------------------- |
| `change` | 对外提供激活项改变的事件响应 | `current`,`index`,`all` |
