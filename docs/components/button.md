---
title: button
isCategories: true
---

# button  按钮

## Properties  属性

| 属性名   | 说明                                         | 类型    | 默认值  |
| -------- | -------------------------------------------- | ------- | ------- |
| type     | 类型, 可选值: `primary`, `info`, `danger`, `warning` | `string`  | `default` |
| plain    | 幽灵按钮                                     | `boolean` | `false`   |
| size     | 按钮尺寸, 可选值: `small`, `large`               | `string`  | `normal`  |
| disabled | 是否禁用                                     | `boolean` | `false`   |
| shape    | 按钮形状, 可选值: `square`, `round`              | `string`  | -       |

## Events

| 事件名     | 说明 | 参数                |
| --------- | ----------- | ------------------- |
| `clicked` | 对外提供click的事件响应  | `disabled`,`clicked` |
| `touched` | 对外提供touchStart的事件响应  | `disabled`,`touched` |

