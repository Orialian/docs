---
title: mode
isCategories: true
---

# mode 模式选择

::: tip
如果需要开启多模式, 请设置multiple属性
:::

## 代码演示

用法

```html
<wo-mode ></wo-mode>
```

```js
// 查找元素节点
let modeEle = document.querySelector("wo-mode");
modeEle.lists = [
  {
    name: "李白",
    selected: true
  },
  {
    name: "杜甫",
    selected: false
  }
];
```

## Properties 属性

| 属性名           | 说明             | 类型          | 默认值  |
| ---------------- | ---------------- | ------------- | ------- |
| activeColor      | 激活项文字颜色   | `string`      | -       |
| activeBackground | 激活项背景颜色   | `string`      | -       |
| color            | 未激活项文字颜色 | `string`      | -       |
| background       | 未激活项背景颜色 | `string`      | -       |
| multiple         | 开启多选         | `boolean`     | `false` |
| lists            | 遍历展示的数组   | `Array<item>` | `[ ]`   |
| item             | 展示的数组项     | `object`      | -       |
| -- name          | 展示文本         | `string`      | -       |
| -- selected      | 是否被选中       | `boolean`     | -       |
| -- ...           | item 属性项      | \*            | -       |

## Events

| 事件名   | 说明                           | 参数                    |
| -------- | ------------------------------ | ----------------------- |
| `change` | 对外提供 激活项 改变的事件响应 | `current`,`index`,`all` |
