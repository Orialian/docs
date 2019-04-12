---
title: progress
isCategories: true
---

# progress 进度条

## Properties 属性

| 属性名        | 说明                        | 类型      | 默认值  |
| ------------- | --------------------------- | --------- | ------- |
| max           | 最大值                      | `number`  | `100`   |
| min           | 最小值                      | `number`  | `0`     |
| value         | 当前值                      | `number`  | `0`     |
| inactive      | 进度条置灰                  | `boolean` | `false` |
| color         | 文字颜色                    | `string`  | -       |
| circleColor   | 标记颜色,默认使用文字颜色   | `string`  | -       |
| percent       | 展现百分比                  | `boolean` | `false` |
| activeColor   | 进度条激活状态颜色          | `number`  | `0`     |
| inactiveColor | 进度条默认颜色,可以使用渐变 | `number`  | `0`     |

## Events

| 事件名   | 说明                          | 参数    |
| -------- | ----------------------------- | ------- |
| `change` | 对外提供 value 改变的事件响应 | `value` |
