---
title: cell
isCategories: true
---

# cell 列表单元

:::tip
直属 cell-group,一般用来包裹其他的组件
在 cell-group 中的最后一项时,需要将 bottomLine 设置为 false
:::

## 代码演示

基础用法

```html
<wo-cell label="基础用法"></wo-cell>
```

设置文字大小和颜色

```html
<wo-cell label="基础用法" label-size="16px" label-color="green"></wo-cell>
```

设置允许横向超出滚动
``` html
<wo-cell is-scroll></wo-cell>
```

## Properties 属性

| 属性名     | 说明                       | 类型      | 默认值  |
| ---------- | -------------------------- | --------- | ------- |
| label      | 单元说明文字描述           | `string`  | -       |
| labelSize  | 说明文字大小               | `string`  | `14px`  |
| labelColor | 说明文字大小颜色           | `string`  | `#333`  |
| isScroll   | 是否允许插槽中超出横向滚动 | `boolean` | `false` |
| topLine    | 单元格顶线                 | `boolean` | `false` |
| bottomLine | 单元格底线                 | `boolean` | `true`  |

## Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
|        |      |      |
