---
title: progress
isCategories: true
---

# progress 进度条

::: warning
仅当 max 值为 100 时(默认或设置为 100), percent 属性才有效
:::

## 代码演示

基础用法

```html
<wo-progress value="20"></wo-progress>
```

自定义最大值和最小值

```html
<wo-progress max="255" min="12"></wo-progress>
```

进度条置灰, 此时无法对其进行操作

```html
<wo-progress inactive></wo-progress>
```

## Properties 属性

| 属性名        | 说明                            | 类型      | 默认值  |
| ------------- | ------------------------------- | --------- | ------- |
| max           | 最大值                          | `number`  | `100`   |
| min           | 最小值                          | `number`  | `0`     |
| value         | 当前值                          | `number`  | `0`     |
| inactive      | 进度条置灰                      | `boolean` | `false` |
| color         | 文字颜色                        | `string`  | -       |
| circleColor   | 标记颜色,默认使用文字颜色       | `string`  | -       |
| percent       | 展现百分比                      | `boolean` | `true`  |
| activeColor   | 进度条激活状态颜色,可以使用渐变 | `string`  | -       |
| inactiveColor | 进度条默认颜色                  | `string`  | -       |

## Events

| 事件名   | 说明                          | 参数    |
| -------- | ----------------------------- | ------- |
| `change` | 对外提供 value 改变的事件响应 | `value` |
