---
title: main
isCategories: true
---

# main 主显示区

:::tip
主显示区主要展示设备所在的房间,设备图片和当前设备的开关状态. 直属body
:::

## Properties 属性

| 属性名   | 说明         | 类型    | 默认值 |
| -------- | ------------ | ------- | ------ |
| location | 房间名称     | string  | -      |
| imageUrl | 图片路径     | string  | -      |
| isOpen   | 设备开关状态 | boolean | false  |

## Events

| 事件名 | 说明                   | 参数   |
| ------ | ---------------------- | ------ |
| change | 点击设备开关的事件响应 | isOpen |
