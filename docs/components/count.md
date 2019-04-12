---
title: count
isCategories: true
---

# count 计数器

## Properties 属性

| 属性名    | 说明         | 类型     | 默认值 |
| --------- | ------------ | -------- | ------ |
| value     | 计数器的值   | `number` | `0`    |
| lineColor | 底线颜色     | `string` | -      |
| step      | 步长         | `number` | `1`    ||
| color     | 颜色         | `string` | -      |
| max       | 最大值       | `number` | `100`  |
| min       | 最小值       | `number` | `0`    |

## Events

| 事件名   | 说明                          | 参数    |
| -------- | ----------------------------- | ------- |
| `change` | 对外提供 value 改变的事件响应 | `value` |
