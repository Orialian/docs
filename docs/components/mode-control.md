---
title: mode-control
isCategories: true
---

# mode-control 模式选择

## Properties 属性

| 属性名           | 说明             | 类型          | 默认值 |
| ---------------- | ---------------- | ------------- | ------ |
| activeColor      | 激活项文字颜色   | `string`      | -      |
| activeBackground | 激活项背景颜色   | `string`      | -      |
| color            | 未激活项文字颜色 | `string`      | -      |
| background       | 未激活项背景颜色 | `string`      | -      |
| lists            | 遍历展示的数组   | `Array<item>` | `[ ]`  |
| item             | 展示的数组项     | `object`      | -      |
| -- name          | 展示文本         | `string`      | -      |
| -- selected      | 是否被选中       | `boolean`     | -      |
| -- ...           | item 属性项      | \*            | -      |

## Events

| 事件名   | 说明                           | 参数                    |
| -------- | ------------------------------ | ----------------------- |
| `change` | 对外提供 激活项 改变的事件响应 | `current`,`index`,`all` |
