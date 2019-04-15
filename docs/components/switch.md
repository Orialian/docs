---
title: switch
isCategories: true
---

# switch 开关

::: tip
当开关为loading 或者 disabled 状态时, 点击开关不进行响应
:::

## 代码演示

基础用法

```html
<wo-switch></wo-switch>
```

自定义激活和未激活时的颜色

```html
<wo-switch active-color="green" inactive-color="gray"></wo-switch>
```

自定义开关尺寸

```html
<wo-switch size="20px"></wo-switch>
```

禁用开关

```html
<wo-switch disabled></wo-switch>
```

## Properties 属性

| 属性名        | 说明               | 类型      | 默认值  |
| ------------- | ------------------ | --------- | ------- |
| checked       | 开关当前状态       | `boolean` | `false` |
| loading       | 开关加载状态       | `boolean` | `false` |
| activeColor   | 开关打开时的背景色 | `string`  | -       |
| inactiveColor | 开关关闭时的背景色 | `string`  | -       |
| loadingColor  | 开关加载时的背景色 | `string`  | -       |
| size          | 开关尺寸           | `string`  | `16px`  |
| disabled      | 是否禁用           | `boolean` | `false` |

## Events

| 事件名   | 说明                             | 参数      |
| -------- | -------------------------------- | --------- |
| `change` | 对外提供 开关状态 改变的事件响应 | `checked` |
