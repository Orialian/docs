---
title: action-sheet
isCategories: true
---

# action-sheet 上拉列表

## Properties 属性

| 属性名      | 说明           | 类型          | 默认值   |
| ----------- | -------------- | ------------- | -------- |
| show        | 是否显示       | `boolean`     | `false`  |
| title       | 标题           | `string`      | -        |
| activeColor | 激活项文字颜色 | `string`      | `normal` |
| lists       | 列表数据       | `Array<item>` | []       |
| item        | 列表项         | `object`      | -        |
| -- name     | item 属性项    | `string`      | -        |
| -- selected | item 属性项    | `boolean`     | -        |
| -- ...      | item 属性项    | \*            | -        |

## Events

| 事件名   | 说明                       | 参数                    |
| -------- | -------------------------- | ----------------------- |
| `change` | 对外提供数据变化的事件响应 | `current`,`index`,`all` |
