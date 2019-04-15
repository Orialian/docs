---
title: count
isCategories: true
---

# count 计数器

## 代码演示

基础用法
``` html
<wo-count value="50"></wo-count>
```

自定义最大值,最小值
```html
<wo-count max="1000" min="0"></wo-count>
```

自定义计数步长
```html
<wo-count max="1000" min="0" step="20"></wo-count>
```
自定义 底线颜色 和 字颜色
```html
<wo-count value="20" line-color="red" color="yellow"></wo-count>
```

## Properties 属性

| 属性名    | 说明         | 类型     | 默认值 |
| --------- | ------------ | -------- | ------ |
| value     | 计数器的值   | `number` | `0`    |
| lineColor | 底线颜色     | `string` | -      |
| step      | 步长         | `number` | `1`    |
| color     | 颜色         | `string` | -      |
| max       | 最大值       | `number` | `100`  |
| min       | 最小值       | `number` | `0`    |

## Events

| 事件名   | 说明                          | 参数    |
| -------- | ----------------------------- | ------- |
| `change` | 对外提供 value 改变的事件响应 | `value` |
