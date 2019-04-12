---
title: switch
isCategories: true
---

# switch 开关

## Properties 属性

| 属性名        | 说明               | 类型      | 默认值  |
| ------------- | ------------------ | --------- | ------- |
| checked       | 开关当前状态       | `boolean` | `false` |
| activeColor   | 开关打开时的背景色 | `string`  | -       |
| inactiveColor | 开关关闭时的背景色 | `string`  | -       |
| size          | 开关尺寸           | `string`  | `16px`  |
| disabled      | 是否禁用           | `boolean` | `false` |

## Events

| 事件名   | 说明                             | 参数      |
| -------- | -------------------------------- | --------- |
| `change` | 对外提供 开关状态 改变的事件响应 | `checked` |
